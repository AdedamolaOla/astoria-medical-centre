# Astoria Medical Centre website

Static HTML/CSS/JavaScript implementation of the Figma landing page.

## Run locally

Because the site uses normal browser assets, serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Content management plan

The doctor list is currently stored in `app.js` in the `doctors` array. Each doctor has an `accepting` boolean that controls the public status badge and the appointment dropdown. This is the field to connect to Google Sheets / Apps Script later.

The appointment form is intentionally not connected to a live endpoint yet. Add the approved secure Google Apps Script web-app URL to `FORM_ENDPOINT` in `setupAppointmentForm()` only after the clinic confirms what information it is allowed to collect.

The Figma image URLs are temporary design assets. Before production launch, download or replace them with permanent assets owned by the clinic and update the `src` values.
