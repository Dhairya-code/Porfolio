// Google Apps Script Web App handler
// Replace YOUR_NOTIFY_EMAIL with your actual inbox; EXPECTED_TOKEN is a simple secret
const YOUR_NOTIFY_EMAIL = 'vdhairyaofficial@gmail.com';
const EXPECTED_TOKEN = 'd9f3a7c2b6e14f1aa5c8e3f47b2d9a1c'; // generated token - keep secret

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents;
    if (!raw) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'No payload' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setResponseCode(400);
    }

    const data = JSON.parse(raw);

    // Basic token check to reduce abuse
    if (EXPECTED_TOKEN && data.token !== EXPECTED_TOKEN) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON)
        .setResponseCode(401);
    }

    const name = data.name || 'Unknown';
    const email = data.email || 'no-reply@example.com';
    const subject = data.subject || '(no subject)';
    const message = data.message || '';

    const body = 'From: ' + name + ' <' + email + '>' + '\n\n' + message;

    MailApp.sendEmail({
      to: YOUR_NOTIFY_EMAIL,
      subject: '[Portfolio] ' + subject,
      body: body
    });

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
      .setResponseCode(500);
  }
}
