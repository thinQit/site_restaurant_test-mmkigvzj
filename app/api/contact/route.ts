import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

type ContactResponse = {
  ok: boolean;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ContactResponse>(
        {
          ok: false,
          message: "Invalid contact form submission.",
        },
        { status: 400 }
      );
    }

    // TODO: Forward parsed.data to an email provider or CRM.
    return NextResponse.json<ContactResponse>(
      {
        ok: true,
        message: "Thanks for reaching out. We’ll get back to you within 1–2 business days.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json<ContactResponse>(
      {
        ok: false,
        message: "We couldn’t send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
