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
- Right grip teleports during games, except while using the album inspector. Right trigger also teleports when simply exploring.
- Y opens/closes the menu. B goes back. **Back to exploring** ends the game while keeping VR active.
- X returns to the yard entrance. Use the Meta menu to exit VR.

Forklift challenges remain desktop-only.

## Validation

Automated checks construct the actual yard and simulate WebXR input. They cover walking, turning, collisions, teleporting, album navigation and inspection, pointer selection, hand rotation, controller release velocity, flight integration, scoring rings, board/floor impacts, a nine-dart round, replay, collection and hide-and-seek, and session exit. The publish package is checked against the tested build.

Headset feel and readability still need real Quest testing. The physics simulation is not a calibrated model of a particular real dart.

The website uses `index.html` and the adjacent `assets` directory. Keep them together. Game-script filenames are versioned to avoid loading an older cached game after an update. GitHub Pages publishes the main branch.

### Companion movement update

Jigglypuff arrives ahead and to one side on clear ground. She follows in visible hops with a short landing pause and squash/stretch, maintaining a 2-metre personal-space radius. She hops away when approached and relocates safely if you walk directly through her or teleport. She disappears during hide-and-seek and returns afterwards. Each VR session starts with a fresh arrival.

### Progress and notifications

There is no permanent floating status card. Discoveries, hide-and-seek clues and completed rounds produce a small notification below eye level that fades after three seconds. Y opens the menu with current activity progress and the album count. Completing a hunt no longer forces the menu open.

The framed wall scoreboard beside the dartboard tracks total points, the nine darts, the last result and personal best. Memory-match progress stays at the table.
