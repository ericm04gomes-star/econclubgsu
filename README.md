# econclub-gsu

Website for the Economics Club at Georgia State University.

## Files

Ten files, no folders. Upload all of them to the top level of the repository.

- index.html, about.html, officers.html, mentorship.html,
  events.html, journal.html, join.html, contact.html
- styles.css  — all styling, shared by every page
- script.js   — navigation menus

The logo and the officer headshots are embedded inside the HTML itself, so
there are no image folders to upload and nothing that can go missing.

## Editing

Text lives in the HTML files. Colours and spacing are at the top of styles.css
under `:root`; changing a value there updates all eight pages.

To swap an officer photo you need the image converted to a data URI. Ask
whoever maintains the site, or use any "image to base64" converter and replace
the long string inside that person's `<img src="...">`.

## Outstanding

- Officer biosketches are not written yet.
- Submission details for the Economics Review are marked "Forthcoming".
- Each board member should open the interest form in Microsoft Forms and turn
  on "Get email notification of each response".
