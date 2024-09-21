import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-bold text-gray-700">TeleMed</h2>
                    <p className="text-sm text-gray-500">© 2024 TeleMed. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-600">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-600">Terms of Service</Link>
                        <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-600">Contact Us</Link>
                    </div>

                </div>


            </div>
        </footer>
    </div>
  )
}

export default Footer