'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        <div className="flex items-center space-x-2">
          <Button>Add Appointment</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>You have 5 appointments today</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Overview of your appointments for {date?.toDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">09:00 AM</TableCell>
                  <TableCell>Alice Johnson</TableCell>
                  <TableCell>Follow-up</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">Start</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">10:30 AM</TableCell>
                  <TableCell>Bob Smith</TableCell>
                  <TableCell>New Patient</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">Start</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">02:00 PM</TableCell>
                  <TableCell>Carol Davis</TableCell>
                  <TableCell>Consultation</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm">Start</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}