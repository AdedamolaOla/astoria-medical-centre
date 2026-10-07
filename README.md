# Astoria Medical Centre website

Static HTML, CSS and JavaScript version of the Figma Home, About Us, Our Team, Services and appointment panel designs. GitHub Pages serves the site directly; no build step or paid site builder is required.

## Preview locally

Run `python3 -m http.server 8765` in the project folder and open `http://localhost:8765/`. The routes are `index.html`, `about.html`, `team.html`, and `services.html`.

## Doctor profiles

Edit the `doctors` array near the top of `app.js` to update a physician's name, credentials or `accepting` state, or add/remove a profile. The cards in the supplied Figma design deliberately use “Dr. Name” and blank portrait placeholders. Verify real profiles and current availability with the clinic before treating this prototype as a live directory. For nontechnical staff, connect this data to a reviewed CMS or build a controlled GitHub edit workflow.

## Booking

The appointment panel matches the Figma layout but has no secure booking endpoint. It intentionally does not transmit or store form data and displays the clinic phone number when submitted. Do not accept health information through a GitHub Pages form or a general-purpose spreadsheet. Integrate the clinic's approved booking provider, privacy notice and confirmation flow before enabling submissions. Similarly, confirm service and enrollment promises with the clinic before production use.

All photographs, logo artwork, and icons used by the pages live under `assets/`. The site does not depend on expiring Figma asset links.
