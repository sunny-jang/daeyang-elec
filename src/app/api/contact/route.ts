import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, device, application, usage, message } = body;

    if (!name || !phone || !email || !device) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      to: "dye2000g@gmail.com",
      subject: `[대양전자 견적문의] ${device} - ${name}`,
      html: `
        <h2>견적 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr style="border-bottom:1px solid #ddd;background:#f8f9fa;">
            <td style="padding:12px;font-weight:bold;width:180px;">이름</td>
            <td style="padding:12px;">${name}</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;background:#f8f9fa;">
            <td style="padding:12px;font-weight:bold;">연락처</td>
            <td style="padding:12px;">${phone}</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;background:#f8f9fa;">
            <td style="padding:12px;font-weight:bold;">이메일</td>
            <td style="padding:12px;">${email}</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:12px;font-weight:bold;">제품명 / Device</td>
            <td style="padding:12px;">${device}</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:12px;font-weight:bold;">적용 / Application</td>
            <td style="padding:12px;">${application || "-"}</td>
          </tr>
          <tr style="border-bottom:1px solid #ddd;">
            <td style="padding:12px;font-weight:bold;">월/년간 사용량</td>
            <td style="padding:12px;">${usage || "-"}</td>
          </tr>
          <tr>
            <td style="padding:12px;font-weight:bold;">기타 문의 사항</td>
            <td style="padding:12px;">${message || "-"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "이메일 발송에 실패했습니다." },
      { status: 500 }
    );
  }
}
