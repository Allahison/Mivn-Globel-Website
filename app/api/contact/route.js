import nodemailer from 'nodemailer';

const services = new Set([
  'CRM & Automation',
  'AI Agents & Personal Assistants',
  'E-commerce Operations',
  'Custom Software Development',
  'Wholesale & B2B Systems',
  'Dropshipping Inventory Network',
  'Website / Funnel',
  'Not Sure Yet',
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function validatePayload(body) {
  const enquiry = {
    fullName: cleanText(body.fullName, 100),
    company: cleanText(body.company, 120),
    email: cleanText(body.email, 160).toLowerCase(),
    phone: cleanText(body.phone, 40),
    service: cleanText(body.service, 80),
    message: cleanText(body.message, 2000),
    recaptchaToken: cleanText(body.recaptchaToken, 10000),
    website: cleanText(body.website, 200),
  };

  if (enquiry.website) {
    return { enquiry, errors: ['Unable to submit this enquiry.'] };
  }

  const errors = [];
  if (enquiry.fullName.length < 2) errors.push('Please enter your full name.');
  if (!emailPattern.test(enquiry.email)) errors.push('Please enter a valid email address.');
  if (enquiry.phone.length < 7) errors.push('Please enter your phone or WhatsApp number.');
  if (!services.has(enquiry.service)) errors.push('Please select a valid service.');
  if (enquiry.message.length < 10) errors.push('Please tell us a little more about your enquiry.');
  if (!enquiry.recaptchaToken) errors.push('Please complete the CAPTCHA.');

  return { enquiry, errors };
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error('RECAPTCHA_SECRET_KEY is not configured.');
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = await response.json();
  return data;
}

function getRecaptchaFailureMessage(result) {
  const errorCodes = result?.['error-codes'] || [];
  console.warn('reCAPTCHA verification failed:', errorCodes);

  if (errorCodes.includes('timeout-or-duplicate')) {
    return 'CAPTCHA expired. Please tick the CAPTCHA again and resubmit.';
  }

  if (
    errorCodes.includes('missing-input-secret') ||
    errorCodes.includes('invalid-input-secret')
  ) {
    return 'CAPTCHA server configuration is invalid. Please check the reCAPTCHA secret key.';
  }

  if (
    errorCodes.includes('missing-input-response') ||
    errorCodes.includes('invalid-input-response')
  ) {
    return 'CAPTCHA could not be verified. Please refresh the page and try again.';
  }

  return 'CAPTCHA verification failed. Please try again.';
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: String(process.env.SMTP_SECURE || port === 465).toLowerCase() !== 'false',
    auth: { user, pass },
  });
}

function buildSupportEmail(enquiry) {
  const lines = [
    'New website enquiry',
    '',
    `Full Name: ${enquiry.fullName}`,
    `Business / Company: ${enquiry.company || 'Not provided'}`,
    `Email: ${enquiry.email}`,
    `Phone / WhatsApp: ${enquiry.phone}`,
    `Service Needed: ${enquiry.service}`,
    '',
    'Message:',
    enquiry.message,
  ];

  return {
    subject: `New website enquiry from ${enquiry.fullName}`,
    text: lines.join('\n'),
    html: `
      <h2>New website enquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        <tr><td><strong>Full Name</strong></td><td>${escapeHtml(enquiry.fullName)}</td></tr>
        <tr><td><strong>Business / Company</strong></td><td>${escapeHtml(enquiry.company || 'Not provided')}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(enquiry.email)}</td></tr>
        <tr><td><strong>Phone / WhatsApp</strong></td><td>${escapeHtml(enquiry.phone)}</td></tr>
        <tr><td><strong>Service Needed</strong></td><td>${escapeHtml(enquiry.service)}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-line">${escapeHtml(enquiry.message)}</p>
    `,
  };
}

function buildCustomerEmail(enquiry) {
  return {
    subject: 'We received your enquiry | Mivan Global Ltd',
    text: `Hi ${enquiry.fullName},

Thank you for contacting Mivan Global Ltd.

We have received your enquiry and will get back to you shortly.

Kind regards,
Mivan Global Ltd
support@mivanglobal.co.uk`,
    html: `
      <p>Hi ${escapeHtml(enquiry.fullName)},</p>
      <p>Thank you for contacting Mivan Global Ltd.</p>
      <p>We have received your enquiry and will get back to you shortly.</p>
      <p>Kind regards,<br />Mivan Global Ltd<br />support@mivanglobal.co.uk</p>
    `,
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { enquiry, errors } = validatePayload(body);

    if (errors.length > 0) {
      return Response.json({ message: errors[0], errors }, { status: 400 });
    }

    const captchaResult = await verifyRecaptcha(enquiry.recaptchaToken);
    if (!captchaResult.success) {
      return Response.json({ message: getRecaptchaFailureMessage(captchaResult) }, { status: 400 });
    }

    const transporter = getTransporter();
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;
    const to = process.env.MAIL_TO || 'support@mivanglobal.co.uk';
    const supportEmail = buildSupportEmail(enquiry);
    const customerEmail = buildCustomerEmail(enquiry);

    await transporter.sendMail({
      from,
      to,
      replyTo: enquiry.email,
      subject: supportEmail.subject,
      text: supportEmail.text,
      html: supportEmail.html,
    });

    await transporter.sendMail({
      from,
      to: enquiry.email,
      subject: customerEmail.subject,
      text: customerEmail.text,
      html: customerEmail.html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ message: 'Unable to send your enquiry right now. Please email support@mivanglobal.co.uk.' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
  });
}
