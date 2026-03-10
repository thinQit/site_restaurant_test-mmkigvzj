export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ReservationFormInput {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  notes?: string;
}
