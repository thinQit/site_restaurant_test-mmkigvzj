'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock3 } from 'lucide-react';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock3,
};

export default function ContactForm({
  headline = 'Contact & Reservation Inquiry',
  subheadline = 'Share your preferred date, party size, and occasion—we’ll confirm your reservation shortly.',
  contactInfo = [
    { icon: 'Phone', label: 'Phone', value: '(555) 123-9876' },
    { icon: 'Mail', label: 'Email', value: 'reservations@saffronhearth.com' },
    { icon: 'MapPin', label: 'Address', value: '125 Olive Lane, Downtown' },
    { icon: 'Clock3', label: 'Hours', value: 'Tue–Sun: 5:00 PM – 10:30 PM' },
  ],
}: Partial<ContactFormProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Party Size</Label>
                    <Input id="guests" type="number" min={1} placeholder="2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Occasion</Label>
                  <Input id="subject" placeholder="Anniversary, business dinner, birthday..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Special Requests</Label>
                  <Textarea id="message" placeholder="Dietary needs, seating preference, notes..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Reservation Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || MapPin;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 text-primary">{React.createElement(Icon, { className: 'h-6 w-6' })}</span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
