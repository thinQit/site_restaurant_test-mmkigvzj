'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface ReservationFormProps {
  action?: string
}

export default function ReservationForm({ action = '/api/reservations' }: Partial<ReservationFormProps>) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <form
      id="reservations"
      action={action}
      method="POST"
      className="mx-auto max-w-3xl space-y-5 rounded-xl border bg-card p-6 shadow-md md:p-8"
      onSubmit={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setMessage('Request sent. We will confirm your reservation shortly.')
        }, 900)
      }}
    >
      <h3 className="font-serif text-3xl text-[#722F37]">Reserve Your Table</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div><Label htmlFor="name">Name</Label><Input id="name" name="name" required /></div>
        <div><Label htmlFor="email">Email</Label><Input id="email" type="email" name="email" required /></div>
        <div><Label htmlFor="date">Date</Label><Input id="date" type="date" name="date" required /></div>
        <div><Label htmlFor="time">Time</Label><Input id="time" type="time" name="time" required /></div>
        <div>
          <Label htmlFor="partySize">Party Size</Label>
          <Select id="partySize" name="partySize" defaultValue="2">
            <option value="1">1 Guest</option><option value="2">2 Guests</option><option value="4">4 Guests</option><option value="6">6 Guests</option><option value="8">8+ Guests</option>
          </Select>
        </div>
        <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" /></div>
      </div>
      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Dietary restrictions, celebration details, seating preferences..." />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-[#722F37] hover:bg-[#5e262d]">
        {loading ? 'Sending...' : 'Request Reservation'}
      </Button>
      {message ? <p className="text-sm text-[#606C38]">{message}</p> : null}
    </form>
  )
}
