/**
 * Ananta One — lead capture web app (Google Apps Script).
 *
 * Receives leads from the Next.js route /api/enquiry, appends them to a Google Sheet
 * and emails the sales team (plus an optional thank-you mail to the customer).
 *
 * SETUP
 * 1. Create a Google Sheet → Extensions → Apps Script → paste this file.
 * 2. Project Settings → Script Properties, add:
 *      TOKEN          a long random string (same value as GOOGLE_SCRIPT_TOKEN in .env.local)
 *      NOTIFY_EMAILS  comma-separated sales emails, e.g. sales@example.com,manager@example.com
 *      SHEET_NAME     (optional) tab name, default "Leads"
 *      AUTO_REPLY     (optional) "true" to send a thank-you email to leads who give an email
 * 3. Run `testSetup` once from the editor to grant Sheet + Mail permissions.
 * 4. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * 5. Copy the /exec URL into GOOGLE_SCRIPT_URL in .env.local and redeploy the site.
 *    After editing this script, publish a NEW version (Manage deployments → Edit → Version: New version).
 */

var PROJECT = "Ananta One";
var PROJECT_LINE = "1 & 2 BHK Homes · Madhuban, Vasai East";
var PHONE_DISPLAY = "+91 91672 87797";
var PHONE_TEL = "+919167287797";
var RERA = "PM1240002601890";
var ADDRESS = "Madhuban Hills, Golani Naka, Vasai East, Vasai-Virar, Maharashtra 401208";

var HEADERS = [
  "Timestamp", "Name", "Mobile", "Email", "Configuration", "Source", "Page",
  "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content", "GCLID", "FBCLID",
  "reCAPTCHA Score", "IP", "User Agent",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var props = PropertiesService.getScriptProperties();
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    var expected = props.getProperty("TOKEN");
    if (!expected || data.token !== expected) return respond({ ok: false, error: "Unauthorized" });
    if (!data.name || !data.mobile) return respond({ ok: false, error: "Missing name or mobile" });

    lock.waitLock(20000);
    var sheet = getSheet(props.getProperty("SHEET_NAME") || "Leads");
    var tz = Session.getScriptTimeZone() || "Asia/Kolkata";
    var when = Utilities.formatDate(new Date(data.timestamp || new Date()), tz, "dd-MMM-yyyy HH:mm:ss");

    sheet.appendRow([
      when, safe(data.name), safe(data.mobile), safe(data.email), safe(data.configuration), safe(data.source), safe(data.page),
      safe(data.utm_source), safe(data.utm_medium), safe(data.utm_campaign), safe(data.utm_term), safe(data.utm_content),
      safe(data.gclid), safe(data.fbclid), data.recaptcha_score, safe(data.ip), safe(data.user_agent),
    ]);
    lock.releaseLock();

    // The lead is already saved; a mail quota/format error must not fail the submission.
    try {
      notifyTeam(props.getProperty("NOTIFY_EMAILS"), data, when);
      if (props.getProperty("AUTO_REPLY") === "true" && data.email) sendAutoReply(data);
    } catch (mailErr) {
      console.error("Email failed", mailErr);
    }

    return respond({ ok: true });
  } catch (err) {
    try { lock.releaseLock(); } catch (ignored) {}
    console.error(err);
    return respond({ ok: false, error: String(err) });
  }
}

function doGet() {
  return respond({ ok: true, service: "ananta-one-leads" });
}

/** Run once from the editor to authorise Sheet + Mail access and create the header row. */
function testSetup() {
  getSheet(PropertiesService.getScriptProperties().getProperty("SHEET_NAME") || "Leads");
  console.log("Mail quota remaining today: " + MailApp.getRemainingDailyQuota());
}

function getSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#5c211b").setFontColor("#fdf6ec");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notifyTeam(recipients, d, when) {
  if (!recipients) return;
  var rows = [
    ["Name", d.name], ["Mobile", d.mobile], ["Email", d.email || "—"], ["Interested in", d.configuration || "—"],
    ["Source", d.source || "—"], ["Page", d.page || "—"],
    ["Campaign", [d.utm_source, d.utm_medium, d.utm_campaign].filter(String).join(" / ") || "—"],
    ["Received", when],
  ];
  var html =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">' +
    '<div style="background:linear-gradient(120deg,#8f3a2f,#230b08);color:#fdf6ec;padding:20px 24px">' +
    '<div style="font-size:12px;letter-spacing:3px;color:#efc27b">NEW LEAD</div>' +
    '<div style="font-size:22px;margin-top:4px">' + PROJECT + ' — Vasai East</div></div>' +
    '<table style="width:100%;border-collapse:collapse;font-size:14px">' +
    rows.map(function (r) {
      return '<tr><td style="padding:10px 24px;color:#777;width:140px;border-bottom:1px solid #f3f3f3">' + r[0] +
        '</td><td style="padding:10px 24px;color:#2b1a14;font-weight:600;border-bottom:1px solid #f3f3f3">' + escapeHtml(String(r[1])) + "</td></tr>";
    }).join("") +
    '</table><div style="padding:16px 24px"><a href="tel:' + escapeHtml(d.mobile) +
    '" style="background:#c96d3b;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-size:13px">Call ' +
    escapeHtml(d.name) + "</a></div></div>";

  var mail = {
    to: recipients,
    subject: "New Lead: " + d.name + " (" + d.mobile + ") — " + PROJECT,
    htmlBody: html,
    name: PROJECT + " Website",
  };
  if (d.email) mail.replyTo = d.email;
  MailApp.sendEmail(mail);
}

function sendAutoReply(d) {
  var html =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#2b1a14">' +
    '<div style="background:linear-gradient(120deg,#8f3a2f,#230b08);color:#fdf6ec;padding:28px;border-radius:12px 12px 0 0;text-align:center">' +
    '<div style="font-size:26px;letter-spacing:4px">ANANTA <span style="color:#d9963a">ONE</span></div>' +
    '<div style="font-size:11px;letter-spacing:3px;color:#efc27b;margin-top:6px">' + PROJECT_LINE.toUpperCase() + '</div></div>' +
    '<div style="padding:24px;border:1px solid #eee;border-top:0;border-radius:0 0 12px 12px">' +
    "<p>Dear " + escapeHtml(d.name) + ",</p>" +
    "<p>Thank you for your interest in <b>" + PROJECT + "</b>. Our relationship manager will call you shortly with the price sheet, brochure and floor plans.</p>" +
    '<p>Need us sooner? Call <a href="tel:' + PHONE_TEL + '">' + PHONE_DISPLAY + "</a>.</p>" +
    '<p style="font-size:11px;color:#888">MahaRERA Reg. No. ' + RERA + " · " + ADDRESS + "</p></div></div>";
  MailApp.sendEmail({ to: d.email, subject: "Thank you for your interest in " + PROJECT, htmlBody: html, name: PROJECT });
}

// Prevent spreadsheet formula injection and trim long values.
function safe(v) {
  var s = v == null ? "" : String(v).slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
