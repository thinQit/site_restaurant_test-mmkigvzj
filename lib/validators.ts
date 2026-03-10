import { z } from "zod";

export const contactTopics = [
  "General question",
  "Private dining",
  "Media / press",
  "Accessibility",
  "Feedback",
] as const;

export const reservationTimes = [
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
] as const;

export const reservationPartySizes = ["1", "2", "3", "4", "5", "6"] as const;

export const reservationOccasions = [
  "None",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  topic: z.enum(contactTopics),
  message: z.string().trim().min(10).max(2000),
});

export const reservationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(25),
  date: z.string().trim().min(1),
  time: z.enum(reservationTimes),
  partySize: z.enum(reservationPartySizes),
  occasion: z.enum(reservationOccasions).optional().default("None"),
  notes: z.string().trim().max(1000).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ReservationInput = z.infer<typeof reservationSchema>;
