'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CalendarIcon, FileTextIcon, HomeIcon, MenuIcon, SearchIcon, SettingsIcon, UsersIcon, VideoIcon, CheckCircleIcon, MessageCircleCodeIcon } from 'lucide-react'
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Card } from '@/components/ui/card';
import Modal from '@/components/ui/modal' // Assume you have a Modal component
import { Dialog, Transition } from '@headlessui/react' // For the chat modal
import Profile from '@/assets/Brick labs AI-56.jpg'

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAssistModalOpen, setIsAssistModalOpen] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const patients: Patient[] = [
    { id: 'P001', name: 'John Doe', age: 45, condition: 'Fever' },
    { id: 'P002', name: 'Jane Smith', age: 32, condition: 'Headache' },
    { id: 'P003', name: 'Bob Johnson', age: 58, condition: 'Back Pain' },
    // Add more patients as needed
  ]

  // Function to open Assist Modal with selected patient
  const openAssistModal = (patient: Patient) => {
    setSelectedPatient(patient)
    setIsAssistModalOpen(true)
  }

  // Function to close Assist Modal
  const closeAssistModal = () => {
    setSelectedPatient(null)
    setIsAssistModalOpen(false)
  }

  // Function to open Chat
  const openChat = () => {
    setIsChatOpen(true)
  }

  // Function to close Chat
  const closeChat = () => {
    setIsChatOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-72 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200 dark:border-gray-700">
            <Link className="flex items-center gap-2 font-semibold text-lg text-blue-600 dark:text-blue-400" href="/dashboard">
              {/* Logo Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>TeleMed</span>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex-1 overflow-auto py-4 px-2">
            <nav className="flex flex-col space-y-2">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard"
              >
                <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/patients"
              >
                <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                Patients
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/appointments"
              >
                <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                Appointments
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/records"
              >
                <FileTextIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                Records
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/settings"
              >
                <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                Settings
              </Link>
            </nav>
          </div>
          {/* Profile Section or Ad Space */}
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
            {/* Option 1: Profile Picture */}
            <div className="flex items-center space-x-3">
              <img
                src={Profile.src}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-700 ">Dr. Smith</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Cardiologist</p>
              </div>
            </div>
            {/* Option 2: Ad Space */}
            {/* 
            <div className="flex items-center justify-center">
              <img
                src="/ad-placeholder.png" // Replace with actual ad image path
                alt="Advertisement"
                className="h-20 w-full object-contain"
              />
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          {/* Mobile Menu Button */}
          <Button className="lg:hidden" size="icon" variant="outline" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon className="h-6 w-6 text-gray-700 " />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-800  placeholder-gray-500 dark:placeholder-gray-400 border border-transparent focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0"
                  placeholder="Search patients..."
                  type="search"
                />
              </div>
            </form>
          </div>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full object-cover"
                  height="40"
                  src="/prof.jpg"
                  width="40"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
          {/* Dashboard Overview */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 ">Dashboard Overview</h1>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            {/* Total Patients Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Patients</CardTitle>
                <UsersIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">1,234</div>
                <p className="mt-1 text-sm text-green-500">+20% from last month</p>
              </CardContent>
            </Card>

            {/* Appointments Today Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Appointments Today</CardTitle>
                <CalendarIcon className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">12</div>
                <p className="mt-1 text-sm text-red-500">2 more than yesterday</p>
              </CardContent>
            </Card>

            {/* Pending Records Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Records</CardTitle>
                <FileTextIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">7</div>
                <p className="mt-1 text-sm text-blue-500">5 less than yesterday</p>
              </CardContent>
            </Card>

            {/* Satisfaction Rate Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Satisfaction Rate</CardTitle>
                <CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">98%</div>
                <p className="mt-1 text-sm text-indigo-500">+2% from last week</p>
              </CardContent>
            </Card>

            {/* Amount Collected Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Amount Collected</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m9-10h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464" />
                </svg>
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">$45,678</div>
                <p className="mt-1 text-sm text-green-500">+15% from last month</p>
              </CardContent>
            </Card>

            {/* Pending Amounts Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Amounts</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.938-7H4a8 8 0 0116 0z" />
                </svg>
              </div>
              <CardContent className="mt-4">
                <div className="text-3xl font-bold text-gray-800 ">$12,345</div>
                <p className="mt-1 text-sm text-red-500">-10% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Patients Table */}
          <div className="bg-white  shadow rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-100 ">
                <TableRow>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black  uppercase tracking-wider">
                    Patient ID
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black  uppercase tracking-wider">
                    Name
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black  uppercase tracking-wider">
                    Age
                  </TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs font-medium text-black  uppercase tracking-wider">
                    Condition
                  </TableHead>
                  <TableHead className="px-6 py-3 text-right text-xs font-medium text-black  uppercase tracking-wider">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">{patient.id}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">{patient.name}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">{patient.age}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">{patient.condition}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-right">
                      <Button
                        size="sm"
                        className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-2"
                        onClick={() => openAssistModal(patient)}
                      >
                        <MessageCircleCodeIcon className="h-4 w-4" />
                        Assist
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Assist Modal */}
          <Modal isOpen={isAssistModalOpen} onClose={closeAssistModal}>
            {selectedPatient && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black  mb-4">Patient Information</h2>
                <div className="space-y-2">
                  <p><span className="font-medium text-black ">Patient ID:</span> {selectedPatient.id}</p>
                  <p><span className="font-medium text-black ">Name:</span> {selectedPatient.name}</p>
                  <p><span className="font-medium text-black ">Age:</span> {selectedPatient.age}</p>
                  <p><span className="font-medium text-black ">Condition:</span> {selectedPatient.condition}</p>
                  
                  {/* Add more patient details as needed */}
                </div>
                <div className="mt-6 flex space-x-4 ">
                  <Button
                    className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                    onClick={() => {
                      // Implement Start Chat functionality
                      closeAssistModal()
                      openChat()
                    }}
                  >
                    <MessageCircleCodeIcon className="h-4 w-4" />
                    Start Chat
                  </Button>
                  <Button
                    className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                    onClick={() => {
                        closeAssistModal()
                        window.open('https://wa.me/+254701888380', '_blank')
                      }}
                  >
                    <MessageCircleCodeIcon className="h-4 w-4" />
                    Whatsapp
                  </Button>
                  <Button
                    className="flex items-center gap-2 bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
                    onClick={() => {
                      closeAssistModal()
                      window.open('https://meet.google.com/ztt-qmwc-tes', '_blank')
                    }}
                  >
                    <VideoIcon className="h-4 w-4" />
                    Meet Now
                  </Button>
                </div>
              </div>
            )}
          </Modal>

          {/* Popup Chat Feature (AI Assistant) */}
          {/* Floating Chat Button */}
          <button
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
            onClick={() => setIsChatOpen(true)}
          >
            <MessageCircleCodeIcon className="h-6 w-6" />
          </button>

          {/* Chat Modal */}
          <Transition appear show={isChatOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeChat}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 ">
                        AI Assistant
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          How can I assist you today?
                        </p>
                      </div>

                      <div className="mt-4">
                        {/* Chat Interface Placeholder */}
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-48 overflow-y-auto mb-4">
                          {/* Messages will appear here */}
                          <p className="text-gray-700 ">Hello! How can I assist you today?</p>
                        </div>
                        {/* Input Field */}
                        <div className="flex">
                          <Input
                            placeholder="Type your message..."
                            className="flex-1 mr-2 bg-gray-100 dark:bg-gray-700 text-gray-800  placeholder-gray-500 dark:placeholder-gray-400"
                          />
                          <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Send
                          </Button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

        </main>

        {/* Footer */}
        <footer className="h-16 flex items-center justify-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <p className="text-sm text-gray-600 ">© 2024 TeleMed. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}


