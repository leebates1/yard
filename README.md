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
- Left stick walks; right stick turns. During RC racing, the left stick steers the car and ordinary walking/turning is suspended.
- Click the left stick in and push it up or down to raise or lower yourself; release to save. See [Standing height](#standing-height).
- Right grip teleports during games, except while using the album inspector or RC racing. Right trigger also teleports when simply exploring.
- Y opens/closes the menu. B goes back. **Back to exploring** ends the game while keeping VR active.
- X returns to the yard entrance, or to the driver spot during RC racing. Use the Meta menu to exit VR.

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
`assets/runtime-1-<hash>.js` is the yard itself and `assets/runtime-2-<hash>.js` is the VR
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

Use **Y → More games & settings → Hide companion / Show companion** to toggle the companion. The choice saves in this browser. She automatically disappears during darts, basketball, bowling, paper planes, memory match, mini-golf and RC racing, then returns to exploration only if enabled. Choosing Jigglypuff playtime explicitly enables her again. Hide-and-seek remains a separate activity.

Bowling pins now use 3D velocity, gravity, angular velocity, floor bounce, damping and pin-to-pin impulses. Stronger impacts launch and tumble pins; a bounded pin deck and backstop contain them. The roll gets time to settle before pins are counted and reset. This is an arcade physics model, not a full rigid-body simulator.

Checks cover airborne pins and spin, ten-frame scoring/replay, the controller-operated toggle, saved preference, automatic game hiding and returning to exploration.

## Bowling score computer

Bowling now has a 3.2m-wide overhead display closer to the throwing line and a matching computer-style console beside the approach. Both screens share live scores: two bowl cells per frame, X for a strike, / for a spare, running totals, current-frame highlight, a large total and personal best. The existing ten-frame, one-point-per-pin rules remain in place. Replay clears both screens.

## Ten frames and strike celebrations

Bowling runs for ten frames with two bowls per frame and a maximum of 100 points using the arcade one-point-per-pin rules. The scoreboard and console show all ten frames in two rows. Ten-frame best scores save separately from the older five-frame results.

A first-bowl strike launches a short colourful fireworks burst above the pin deck, including on the final frame. Spares do not trigger it. Particles fade away, pause with the game and clear on replay or exit. Checks cover ten consecutive strikes (100 points), single celebration per strike, spares, replay and exit.

## Bowling supporters and clear lanes

The companion toggle now explicitly says **Hide companion** or **Show companion** under **More games & settings**. Its old label incorrectly used the Find Jigglypuff activity design.

Pokémon hunt balls, cards and the hunt ball visual are temporarily hidden throughout bowling, including while its menu is open. They return afterwards and collected-card progress is untouched.

Up to four animated staff supporters stand in checked, clear positions outside the lane. They clap, wave and bounce after successful bowls, with a longer celebration for strikes and short synthesised applause. They pause with the game and leave when bowling ends. Existing character assets are reused.

## Reactive spectators

Bowling supporters turn towards the player before a bowl and track the rolling ball with their bodies and heads. They lean forward while you prepare, glance towards one another between throws, and react on the first pin impact. Staggered celebrations include clapping, raised arms, fist pumps and waves, with larger bounces for strikes and encouraging waves after misses. Their feet stay in their checked positions outside the lane. All animation pauses with the menu.

## Arcade visual polish

Bowling has a maple wood-grain lane, warm illuminated edge strips, overhead light fittings and a framed TFJ BOWL sign above the live score display. Soft contact shadows ground the spectators and follow the tumbling pins. Pin shadows fade while airborne and reset with each frame.

Darts, memory match, paper planes and basketball have matching framed activity signs with their own accent colours. The basketball court also has a framed score display and a mast supporting its sign and light fitting.

One warm fill light is reused across these activities and switches off when returning to exploration. The light does not cast shadow maps; contact shadows use a shared small canvas texture. No postprocessing or global lighting changes are introduced. Existing game saves and the standing-height script are preserved.

The actual yard was rendered in a desktop browser for placement and readability checks. Automated gameplay checks passed for all existing activities, replay, transitions and the preserved floor offset. Quest performance and headset appearance still need a real-device check.

## Warehouse mini-golf

Press **Y → More games & settings → Warehouse mini-golf**. Six different holes rotate through a checked, clear warehouse bay: First delivery, Crate slalom, Loading ramp, Pipe pass, Bank holiday and Dispatch finale. The green, loading ramps, pallet obstacles, tunnel, cup, flag and scorecard are 3D objects in the yard.

**Hold your right controller comfortably, look down the green and press A to move and fit the club.** The stance leaves the ball beside your right hand. Fitting sets the shaft length and grip angle for your current hold; it happens automatically on arrival too. The club then keeps that fit until you press A again or advance to another hole. Its handle follows the actual tracked controller grip, separately from the menu's pointing ray. Lifting your hand raises the mallet, and wrist rotations arc it through space.

The rounded metal mallet has a padded face, a dark top insert and two alignment stripes. A small ring around the stopped ball turns mint when the nearby face is level, and a short line shows the face direction on the green. These guides do not aim at the cup. Hold the **right trigger**, brush the face through the ball and release. A small contact allowance helps light taps; square-face contact sends the ball along the face normal, avoiding sideways launches from the old corner collision. Briefly averaged head velocity gives more manageable power. Clicking, missing and swinging above the ball do not add strokes. One contact counts per trigger hold.

Gentle putts drop into the cup; fast ones roll over it. Turf friction, ramp slopes, rails, pallets and the pipe walls affect the ball. Each hole has an eight-stroke limit. After finishing a hole, **A** advances to the next; after hole six, A starts another round. **Y** pauses physics and opens the menu; **B** ends the activity. The club disengages during menus, teleports and lost tracking. A rolling ball resumes afterwards. Walking, turning and teleporting are suspended while the trigger engages a tracked club.

The fixed scorecard shows strokes, pars, six-hole total and your saved lowest score. Course par is 18: Gold for 18 strokes or fewer, Silver up to 24 and Bronze for completing the course. Mini-golf saves under its own key and leaves all other progress untouched. The companion and hunt collectibles hide throughout golf and return afterwards according to the existing companion preference. Your standing-height controls are unchanged.

Automated checks construct the actual yard and exercise the WebXR bridge with separate grip and pointing poses. They cover short/tall fitting, comfortable grip angle, a fixed shaft during strokes, wrist-only contact, raised-club misses, the contact guide, tracking loss, physical hits, pause, continued rolling after interruption, six-hole scoring, saved best, replay, the stroke limit and restoration on exit. Physics checks cover face-led direction, soft taps, tracking jumps, friction stopping distances, slow/fast cup passes, rebounds, ramp gravity, reachable routes and rolling at 72/90/120 Hz. Existing VR-game regressions and the preserved floor-offset checks pass. Club feel and visual appearance still need a real Quest check.

## Arcade wall of fame

A permanent 3.6-metre framed display is mounted on the office divider inside the Unit 9 warehouse. Visit using **Y → More games & settings → Arcade wall of fame**, or walk to it near the back offices. The shortcut checks a clear approach, turns you towards the wall and temporarily hides the companion. Walking away restores exploration; B returns to the menu. The display stays in the yard after leaving VR.

Nine panels in a three-by-three grid show Mollie’s personal records, collection progress, current medals and the next gold target. The bronze, silver and gold 3D cups on the shelf become coloured when any activity reaches that tier. An improved record briefly pulses the frame mint. The canvas redraws only when records change. Existing scores are read from their existing keys, and records are personal to this browser.

| Activity | Bronze | Silver | Gold |
| --- | --- | --- | --- |
| Bowling | 10 pins | 50 pins | 80 pins |
| Darts | 50 points | 150 points | 300 points |
| Six-hole mini-golf | Complete the course | 24 strokes or fewer | 18 strokes or fewer |
| Basketball | 2 baskets | 5 baskets | 8 baskets |
| Paper planes | 10 points | 50 points | 100 points |
| RC car racing | Complete a lap | Lap in 20 seconds | Lap in 14 seconds |
| Memory match | Complete an album deck | Pairs + 2 turns or fewer | One turn per pair |
| Card album | 6 cards | 12 cards | All 18 cards |
| Jigglypuff hide-and-seek | 1 completed hunt | 3 completed hunts | 5 completed hunts |

Memory match now saves the fewest turns separately for each album-deck size, from two to six pairs, under `tfj-memory-bests-v1`. Practice rounds are excluded. The wall shows the largest completed deck and its best result; lower results win for memory, golf and RC racing. Resetting a round retains records. Other saved progress and the user's standing-height script are preserved.

Checks cover saved-record loading, score direction, medal boundaries, missing/corrupt/denied storage, practice exclusion, single memory saves, replay, the real controller menu, safe wall approach and sightlines, live updates, trophy colours, avoiding redundant texture redraws, companion clearance and walking away. Existing VR-game and floor-offset regressions pass. Wall appearance and readability still need a real Quest check.


## RC car racing

Choose **Y → More games & settings → RC car racing** to move beside the Pallet Circuit in the Unit 9 warehouse. Watch a detailed TF Jones 3D rally buggy from the driver spot. Its navy and blue bodywork has yellow trim and the existing official TF Jones wordmark on the bonnet, roof, both side panels and rear wing. After the three-second start lights, drive clockwise through each highlighted checkpoint for a three-lap time trial.

- **Left thumbstick:** steer left/right.
- **Right trigger:** proportional accelerator. Release the menu-selection trigger before driving.
- **Right grip:** brake, then reverse when stopped.
- **A:** rescue at the last passed gate with a two-second penalty; after finishing, start another race.
- **X:** return to the driver viewpoint without resetting the race.
- **Y:** pause/resume through the menu; **B** while racing ends the activity and opens the menu.

The fixed scoreboard shows lap times, race time and saved bests. Front wheels steer, all wheels spin and the body leans under acceleration and cornering. Fixed-step bicycle steering, acceleration, coasting, reverse and bumper collisions keep the car inside matching rails and around the shipping island. Checkpoints require ordered crossings in the correct direction; cutting back over the start line cannot score a lap.

Ordinary joystick walking, snap turning and teleporting are disabled during racing so steering and braking cannot move the player. Room-scale head movement remains available. Menus, hidden sessions and disconnected controllers freeze the race; resuming requires releasing the accelerator and brake before powering the car. The companion and card-hunt visuals hide during racing and return afterwards.

Lap and complete-race bests save separately under `tfj-rc-best-lap-v1` and `tfj-rc-best-race-v1` as integer milliseconds. Lower times win, rescue penalties count, and replay retains records. The wall of fame now includes RC lap medals. Existing card progress, other game records and the standing-height script are preserved.

Automated checks physically drive all three laps using the real Quest input bridge, validate warehouse clearance, steering and visible wheels, collision bounds, gate order/direction, pause, disconnect, reverse, rescue penalties, X behavior, exclusive controls, record saves, wall updates and replay cleanup. Controller feel and appearance still need a real Quest test.

## Ketterer Court exterior

The buildings across the road now follow the supplied Street View reference: grey corrugated warehouses, blue shutters and roof edging, glazed offices, shallow pitched roofs, gutters, drainage and street lamps. Looking out from the TF Jones yard, **Neil Signs is on the left** and **A&M Ceramics is on the right**. Their signs are recreated from the references; building dimensions remain approximate.

The flat tree backdrops are replaced with bark-textured trunks, branches and varied leaf crowns. Shared instanced geometry and opaque, alpha-tested foliage limit rendering cost for Quest. The improved exterior appears both in desktop exploration and VR.

Checks confirm that all 410 original gameplay collision boxes and the original yard geometry remain unchanged. The new buildings sit beyond the walking boundary, and trees are placed behind the opposite roofs. Existing games, records and the standing-height script are preserved. Actual-scene checks cover finite geometry, exterior bounds and rendering budgets, alongside the existing game regressions. Exterior appearance and performance still need a headset check.
