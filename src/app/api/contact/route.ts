import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resendKey = process.env.RESEND_API_KEY;
  
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email and Phone are required fields.' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <h2 style="color: #1d4ed8; margin-top: 0;">🏥 New Addiction Rehab Strategy Call Request</h2>
        <p style="color: #475569; font-size: 15px;">A new lead has requested a free strategy call from the Rehab Digital Marketing LP.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px; color: #0f172a;">Full Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1e293b;">${firstName} ${lastName || ''}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0f172a;">Treatment Center</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1e293b; font-weight: 600;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0f172a;">Direct Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1d4ed8; font-weight: bold;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0f172a;">Work Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #0f172a;">Facility Capacity</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #0284c7; font-weight: bold;">${service || 'N/A'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #1d4ed8;">
          <h3 style="margin-top: 0; color: #0f172a; font-size: 15px;">Lead Summary:</h3>
          <p style="white-space: pre-wrap; color: #334155; line-height: 1.6; margin: 0;">${message || 'Requested Rehab Strategy Call'}</p>
        </div>
      </div>
    `;

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: 'ClickLab Website <onboarding@resend.dev>',
        to: ['contact@clicklabmarketing.com'],
        subject: `🚨 REHAB LEAD: ${company || firstName} (${service || 'Strategy Call'})`,
        html: htmlContent,
        replyTo: email,
      });
    } else {
      console.log('RESEND_API_KEY missing - Lead submission received:', { firstName, email, phone, company, service });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: true, warning: 'Processed without email transport' }, { status: 200 });
  }
}
