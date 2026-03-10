import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";

type ReservationResponse = {
  ok: boolean;
  message: string;
  reservationId?: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ReservationResponse>(
        {
          ok: false,
          message: "Invalid reservation request.",
        },
        { status: 400 }
      );
    }

    const reservationId = randomUUID();

    // TODO: Forward parsed.data + reservationId to booking/email system.
    return NextResponse.json<ReservationResponse>(
      {
        ok: true,
        message: "Thanks! Your reservation request has been received. We’ll email you shortly to confirm.",
        reservationId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json<ReservationResponse>(
      {
        ok: false,
        message: "Something went wrong. Please try again or call (415) 555-0198.",
      },
      { status: 500 }
    );
  }
}
