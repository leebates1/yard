
/* VR floor height.
   The rig sits at the player's feet and the headset reports how far the head is
   above the real floor, so a mis-calibrated headset floor puts the ground in the
   middle of your body. This levels the ground to your feet on entering VR, and
   lets you fine tune it in the headset: click the left thumbstick in and push it
   up or down. window.yardFloorOffset is read by the Quest player rig each frame. */
(function () {
  var KEY = 'tfj-vr-floor-v1';
  var LIMIT = 1.8;
  var pref = { mode: '1.68', nudge: 0 };

  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved && typeof saved === 'object') {
      if (saved.mode) pref.mode = String(saved.mode);
      if (isFinite(saved.nudge)) pref.nudge = Number(saved.nudge) || 0;
    }
  } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(pref)); } catch (e) {} }

  var base = 0, samples = [], calibTime = 0, calibrating = true, adjusting = false;
  var readout = document.querySelector('#questHeightValue');
  window.yardFloorOffset = 0;

  function clamp(v) { return Math.max(-LIMIT, Math.min(LIMIT, v)); }

  function apply() {
    window.yardFloorOffset = clamp(base + pref.nudge);
    if (readout) {
      var d = window.yardFloorOffset;
      readout.textContent = Math.abs(d) > 0.005
        ? 'Ground is currently ' + (d > 0 ? 'lowered ' : 'raised ') + Math.abs(d).toFixed(2) + ' m. '
        : '';
    }
  }

  function wanted() { return pref.mode === 'headset' ? null : (Number(pref.mode) || 1.68); }

  function level(headY) {
    var eye = wanted();
    base = (eye === null || !isFinite(headY) || headY < 0.2) ? 0 : eye - headY;
    apply();
  }

  function restart() { calibrating = true; samples = []; calibTime = 0; base = 0; apply(); }

  function measure(dt, headY) {
    if (!calibrating || !isFinite(headY) || headY < 0.2) return;
    if (!samples.length) level(headY);
    samples.push(headY);
    calibTime += dt;
    if (calibTime >= 1.2) {
      samples.sort(function (a, b) { return a - b; });
      level(samples[Math.floor(samples.length * 0.9)]);
      calibrating = false;
    }
  }

  function trim(dt, session) {
    var left = null, sources = session ? session.inputSources : [];
    for (var i = 0; i < sources.length; i++) if (sources[i].handedness === 'left') left = sources[i];
    var pad = left && left.gamepad;
    if (!pad) { adjusting = false; return; }
    var axes = pad.axes || [];
    var y = axes.length >= 4 ? axes[3] : (axes[1] || 0);
    if (pad.buttons[3] && pad.buttons[3].pressed) {
      adjusting = true;
      if (Math.abs(y) > 0.25) { pref.nudge = clamp(pref.nudge - y * 0.55 * dt); apply(); }
    } else if (adjusting) { adjusting = false; save(); }
  }

  var select = document.querySelector('#questHeight');
  if (select) {
    select.value = pref.mode;
    if (select.value !== pref.mode) { pref.mode = select.value; save(); }
    select.addEventListener('change', function () { pref.mode = select.value; save(); restart(); });
  }
  var reset = document.querySelector('#questHeightReset');
  if (reset) reset.addEventListener('click', function () { pref.nudge = 0; save(); restart(); });
  apply();

  function hook() {
    var yard = window.yardDebug, bridge = window.questBridge;
    if (!yard || !bridge || bridge.floorLevelled) return false;
    var xr = yard.renderer.xr, sample = bridge.sample;
    bridge.sample = function (dt) {
      var headY = NaN;
      try {
        var pose = this.frame && this.frame.getViewerPose(xr.getReferenceSpace());
        if (pose) headY = pose.transform.position.y;
      } catch (e) {}
      measure(dt, headY);
      trim(dt, xr.getSession());
      var move = sample.call(this, dt);
      if (adjusting && move) { move.fwd = 0; move.strafe = 0; }
      return move;
    };
    bridge.floorLevelled = true;
    xr.addEventListener('sessionstart', restart);
    xr.addEventListener('sessionend', function () { adjusting = false; save(); });
    return true;
  }
  var poll = setInterval(function () { if (hook()) clearInterval(poll); }, 200);
})();
