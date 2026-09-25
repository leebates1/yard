# TF Jones Yard — Quest VR games

Open the GitHub Pages website in the Quest browser and select Enter VR. Press **Y on the left controller** for the games menu.

## Menu design

The VR setup screen, activity menu, album controls, progress panel and darts scoreboard share a navy-and-gold theme. Activities have distinct icons and accent colours. Pointing highlights buttons and slightly lifts album controls. The scoreboard shows nine throw markers and a prominent personal best.

## Memory match and companion

Select **Memory match** in the games menu to visit the staff-room table. Point at cards with your right controller and pull the trigger to turn them over. Match every pair; **A** starts another round after completion. The deck uses up to six collected Pokémon. With fewer than two collected cards, a clearly labelled four-pair practice deck is available; practice does not change the collection. Opening the menu pauses the mismatch timer.

Press **Y** to open the games menu and album, **B** to go back and **X** to return to the yard entrance. The automatic wrist panel has been removed.

A smaller Jigglypuff companion follows behind you, blinks and waves nearby. She follows your trail around obstacles, catches up after teleports, and stays on the appropriate floor. She has no player collision. The companion is hidden while hide-and-seek is active and returns after completion or cancellation; the hidden game character remains separate.

## Card album

The album has a hard cover, a two-page spread, nine spreads holding all 18 cards, and animated page turns. Point at a collected card and pull the right trigger to inspect it. Unfound cards remain secret.

The inspector brings a larger card closer. Point at **Larger**, **Smaller** or **Flip** and pull the trigger. Hold the right grip and rotate your hand to examine it from different angles. **B** returns to the book; it does not exit VR.

## Staff-room darts

Select **Darts — go to the staff-room throwing line** in the games menu. This moves you to the marked line facing the existing dartboard.

Stay behind the line. Hold the right trigger, move your hand as though throwing a dart, then release the trigger. The dart uses measured controller movement, gravity, light drag and continuous collision checks. There is no automatic target selection or preselected landing point. A stationary release does not launch a dart.

Visible 3D darts stick where they hit. Scores match the board artwork's singles, doubles, triples, outer bull and bullseye. Play nine darts for a total score; your best round saves on this browser. Press **A** after the ninth dart to start another round.

## Other games and controls

- Pokémon hunt: hold trigger, swing and release a Poké Ball at the hidden balls. The existing 18-card collection and save are retained.
- Jigglypuff: follow the room and sound clues; get close, point and pull the trigger. Find her three times.
- Left stick walks; right stick turns.
- Click the left stick in and push it up or down to raise or lower yourself; release to save. See [Standing height](#standing-height).
- Right grip teleports during games, except while using the album inspector. Right trigger also teleports when simply exploring.
- Y opens/closes the menu. B goes back. **Back to exploring** ends the game while keeping VR active.
- X returns to the yard entrance. Use the Meta menu to exit VR.

Forklift challenges remain desktop-only.

## Standing height

The yard's ground is levelled to your feet when you enter VR, so the view does not
depend on the headset's own floor calibration being right. Stand normally as the
session begins; the first 1.2 seconds are measured, and crouching afterwards works
as expected.

To adjust it in the headset, **click the left thumbstick in and push it up or down**.
The ground rises or falls; release to save it for next time. Walking is suspended
while the stick is held. The setup screen has a **Standing height** setting for the
target height, or to leave the headset floor alone, and a **Reset height** button
that clears any manual adjustment.

## Validation

Automated checks construct the actual yard and simulate WebXR input. They cover walking, turning, collisions, teleporting, album navigation and inspection, pointer selection, hand rotation, controller release velocity, flight integration, scoring rings, board/floor impacts, a nine-dart round, replay, collection and hide-and-seek, and session exit. The publish package is checked against the tested build.

Headset feel and readability still need real Quest testing. The physics simulation is not a calibrated model of a particular real dart.

The website uses `index.html` and the adjacent `assets` directory. Keep them together. Game-script filenames are versioned to avoid loading an older cached game after an update. GitHub Pages publishes the main branch.

### Companion movement update

Jigglypuff arrives ahead and to one side on clear ground. She follows in visible hops with a short landing pause and squash/stretch, maintaining a 2-metre personal-space radius. She hops away when approached and relocates safely if you walk directly through her or teleport. She disappears during hide-and-seek and returns afterwards. Each VR session starts with a fresh arrival.

### Progress and notifications

There is no permanent floating status card. Discoveries, hide-and-seek clues and completed rounds produce a small notification below eye level that fades after three seconds. Y opens the menu with current activity progress and the album count. Completing a hunt no longer forces the menu open.

The framed wall scoreboard beside the dartboard tracks total points, the nine darts, the last result and personal best. Memory-match progress stays at the table.

## Editing this project

This repository holds built output only. There is no source tree and no source maps;
`assets/runtime-1.js` is the yard itself and `assets/runtime-2-<hash>.js` is the VR
layer, both minified. Changes are therefore made by editing a bundle directly, copying
it to a new content-hashed filename, and pointing `index.html` at the copy. Readable
logic is better placed in an inline script in `index.html`.

A regenerated build would overwrite these edits. The standing-height fix is one such
edit: the Quest player rig adds `window.yardFloorOffset` to its `y` position, and the
script at the end of `index.html` measures and stores that offset. If the game is ever
rebuilt from elsewhere, that change has to be carried across or the ground returns to
wherever the headset believes the floor is.

`window.yardDebug` exposes the running game for checks. VR behaviour can be exercised
in a desktop browser by substituting `renderer.xr.getSession()`, `getReferenceSpace()`
and `questBridge.frame`.

## Jigglypuff playtime and basketball

Press Y and choose **Jigglypuff playtime**. She comes within reach. Hold the right trigger to offer a berry to her mouth; release before taking another berry. With the trigger released, touch her raised right hand using either controller for a high-five. She reacts with a happy bounce, heart and controller vibration. Short cooldowns prevent accidental repeats. Her normal two-metre spacing resumes when playtime ends.

Choose **Poké Ball basketball** for a clear yard court. Hold the right trigger, swing upwards and release. Gravity, backboard rebounds and rim deflections affect the visible ball; only downward crossings through the hoop score. The court scoreboard tracks ten throws, baskets and a saved personal best. Press A after a finished round to replay, or Y for the menu.

The existing floor-height script, saved settings and left-thumbstick adjustment are preserved. Automated checks cover feeding, high-five debounce, physical releases, scoring direction, ten-shot rounds and replay, alongside existing game regressions. Controller feel still needs Quest testing.

## Warehouse bowling

Press Y and choose **Warehouse bowling** to move to a clear lane inside Unit 9. Stay behind the yellow line, hold the right trigger, swing underarm towards the pins and release. The ball uses measured controller velocity, gravity, floor bounce and rolling friction. Pin impacts transfer motion to neighbouring pins; gutter balls cannot score.

This is an arcade ten-frame challenge: two bowls per frame, one point per pin, maximum 100. A strike advances immediately; otherwise remaining pins stay up for the second bowl. The freestanding scoreboard shows frame scores, total and a saved best. Press A after the final frame to replay. Y pauses the action; B opens the menu and ends the game.

Automated checks cover actual warehouse clearance, ten-pin setup, throwing, pin impacts, gutters, pause/resume, frame scoring, full rounds and replay. Headset throw feel still needs hands-on testing.

## Paper-plane challenge

Press Y, choose **More games →**, then **Paper-plane challenge**. You move to the warehouse launch line. Hold the right trigger, swing forwards and release a folded 3D paper plane. Its release velocity controls direction and speed; simplified air drag and sinking flight make it glide rather than travel like a ball. Scenery stops a flight.

Five planes per round, three hoops, 10 points for each hoop crossed forwards once per plane. The course scoreboard shows points, throws, longest glide and a saved best score. Press A after the fifth flight to replay. Y pauses and opens the menu; B ends the activity.

Automated checks cover actual controller menu navigation, release, glide and drag, hoop direction and misses, five flights, score bounds, distance, pause, replay and cleanup. Your saved floor-height controls are unchanged.

## Companion switch and lively pins

Use **Y → More games → Jigglypuff: On / Off** to toggle the companion. The choice saves in this browser. She automatically disappears during darts, basketball, bowling, paper planes and memory match, then returns to exploration only if enabled. Choosing Jigglypuff playtime explicitly enables her again. Hide-and-seek remains a separate activity.

Bowling pins now use 3D velocity, gravity, angular velocity, floor bounce, damping and pin-to-pin impulses. Stronger impacts launch and tumble pins; a bounded pin deck and backstop contain them. The roll gets time to settle before pins are counted and reset. This is an arcade physics model, not a full rigid-body simulator.

Checks cover airborne pins and spin, ten-frame scoring/replay, the controller-operated toggle, saved preference, automatic game hiding and returning to exploration.

## Bowling score computer

Bowling now has a 3.2m-wide overhead display closer to the throwing line and a matching computer-style console beside the approach. Both screens share live scores: two bowl cells per frame, X for a strike, / for a spare, running totals, current-frame highlight, a large total and personal best. The existing ten-frame, one-point-per-pin rules remain in place. Replay clears both screens.

## Ten frames and strike celebrations

Bowling runs for ten frames with two bowls per frame and a maximum of 100 points using the arcade one-point-per-pin rules. The scoreboard and console show all ten frames in two rows. Ten-frame best scores save separately from the older five-frame results.

A first-bowl strike launches a short colourful fireworks burst above the pin deck, including on the final frame. Spares do not trigger it. Particles fade away, pause with the game and clear on replay or exit. Checks cover ten consecutive strikes (100 points), single celebration per strike, spares, replay and exit.
