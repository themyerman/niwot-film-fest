// Niwot Film Festival — Film Submission Form Builder
// 1. Go to script.google.com and create a new project
// 2. Paste this entire script, replacing any existing code
// 3. Click Run → createSubmissionForm
// 4. Authorize when prompted
// 5. Check your Google Drive for the new form
// 6. Open the form, click Send → link icon, copy the embed iframe code
// 7. Paste the iframe into submit.html where the placeholder comment is

function createSubmissionForm() {
  var form = FormApp.create('Niwot Film Festival — Film Submission');

  form.setDescription(
    'Submit your film to the Niwot Film Festival, January 21–31, 2027 · Niwot, Colorado.\n\n' +
    'No entry fee. All tracks welcome features, documentaries, and shorts. ' +
    'Youth Track films must be 8–10 minutes and made by current middle or high school students. ' +
    'You may submit to more than one track.'
  );

  form.setConfirmationMessage(
    'Thank you for submitting to the Niwot Film Festival! ' +
    'We\'ll be in touch at the email you provided. See you in January.'
  );

  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);

  // ── Section 1: About You ──────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('About You');

  form.addTextItem()
    .setTitle('Full name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email address')
    .setRequired(true);

  form.addTextItem()
    .setTitle('City / State / Country')
    .setRequired(true);

  // ── Section 2: Your Film ──────────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Your Film');

  form.addTextItem()
    .setTitle('Film title')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Runtime (minutes)')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Genre')
    .setRequired(true)
    .setChoiceValues([
      'Documentary',
      'Narrative Short',
      'Narrative Feature',
      'Animation',
      'Experimental',
      'Other'
    ]);

  form.addTextItem()
    .setTitle('Logline')
    .setHelpText('One or two sentences. 150 characters max.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Screener link')
    .setHelpText('Vimeo, YouTube, or Google Drive. Include password in the field below if needed.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Screener password')
    .setHelpText('Leave blank if not password-protected.')
    .setRequired(false);

  // ── Section 3: Track Selection ────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Track Selection')
    .setHelpText('Select all tracks your film is appropriate for. You may choose more than one.');

  form.addCheckboxItem()
    .setTitle('Which track(s) are you submitting to?')
    .setRequired(true)
    .setChoiceValues([
      'The Left Hand Series — Indigenous voices and stories',
      'New Neighbors Showcase — Immigrant and diaspora perspectives',
      'Colorado Spotlight — Colorado filmmakers and/or stories',
      'Environmental Track — Water, land, climate, and ecology',
      'Youth Track — Films by middle or high school students (8–10 min)'
    ]);

  // ── Section 4: Anything Else ──────────────────────────────────

  form.addSectionHeaderItem()
    .setTitle('Anything else?');

  form.addParagraphTextItem()
    .setTitle('Is there anything else you\'d like us to know?')
    .setHelpText('Optional. Context about your film, your community ties, or anything relevant.')
    .setRequired(false);

  // ── Done ──────────────────────────────────────────────────────

  var url = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('Form created successfully.');
  Logger.log('Published URL: ' + url);
  Logger.log('Edit URL: ' + editUrl);

  // Show a dialog with the URLs
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  Browser.msgBox(
    'Form created!',
    'Published URL:\n' + url + '\n\nEdit URL:\n' + editUrl,
    Browser.Buttons.OK
  );
}
