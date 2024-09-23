'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecordsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 bg-white h-screen">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Patient Records</h2>
        <div className="flex items-center space-x-2">
          <Button>Add New Record</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Records</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Records</CardTitle>
          <CardDescription>A list of recent patient records</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Record ID</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">REC001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>2023-06-01</TableCell>
                <TableCell>Consultation</TableCell>
                <TableCell className="text-right">
                  <Button size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">REC002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>2023-06-02</TableCell>
                <TableCell>Lab Results</TableCell>
                <TableCell className="text-right">
                  <Button size="sm">View</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">REC003</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>2023-06-03</TableCell>
                <TableCell>Prescription</TableCell>
                <TableCell className="text-right">
                  <Button size="sm">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}