# TF Jones Yard — Quest VR games

Adds two VR games and a card viewer to the Quest walkthrough tested by Lee.

## Upload to the existing GitHub Pages repository

Replace the repository's root `index.html` with this folder's `index.html`, and upload the entire `assets` folder beside it. Keep `index.html` and `assets` together. Do not upload the enclosing `Quest3-Yard-Games-v2` folder as another directory.

The Pages settings and website address can stay the same. After Pages finishes deploying, reload the page in the Quest browser before selecting Enter VR. The original single-file v1 build remains available locally as a rollback.

## VR controls

- Left stick: walk. Right stick: turn.
- Left Y: open/close the in-world games menu.
- Right trigger: select menu buttons. In the Pokémon hunt, hold, swing gently and release to throw. A gentle point-and-release throw is also supported.
- Right grip: hold to aim a teleport, release on green to move. In exploration, the right trigger also teleports as before.
- Right B: close the menu, or stop the current game and open the menu. **Back to exploring** also ends the game without leaving VR.
- Left X: return to the entrance.
- Meta menu: exit VR.

## Games

**Pokémon hunt:** open the games menu and start the hunt. Find the existing hidden balls around both units and upstairs. Hit them with a thrown ball to reveal their cards. Throws collide with scenery. Cards use the existing browser save, so progress on the same website/browser is retained.

**Jigglypuff:** find her in three hiding spots. The small instruction panel gives a room clue; positional notes help when sound is enabled. Get close, point at her and click the trigger. Completed rounds are saved locally.

**Card viewer:** open Card album in the games menu. Browse three cards per page, select Flip for the backs, and Previous/Next to turn pages. Unfound cards remain secret.

Darts, memory match and forklift challenges have not been adapted for VR in this update.

## Validation

The source is based on the exact v1 index.html retrieved from leebates1/yard (commit 1cacb0e139c2d5f9fcd5fb47dd306e2d7d069d94).

Automated checks exercised the actual scene with a simulated renderer/WebXR input: walking, turning, collisions, teleport, menu pointer selection, trigger release, throw trajectory/collision math, all three hide-and-seek finds, saved collection updates, duplicate prevention, completion, and session exit. The packaged images were checked byte-for-byte against the original embedded assets and every JavaScript file was syntax checked.

This update still needs a Quest 3 test for throwing feel, visual readability, positional audio and frame rate. GitHub Pages publishes the files on the main branch.
