"use client"

import { useState } from "react"

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div
      className={`min-h-screen font-mono ${
        isDarkMode
          ? "bg-[#131315] text-white"
          : "bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black"
      }`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 ${
          isDarkMode ? "bg-[#1C1C1E] backdrop-blur-md" : "bg-[#f5f5f5] bg-opacity-50 backdrop-blur-md"
        }`}
      >
        <div
          className={`text-xl font-bold ${
            isDarkMode ? "text-transparent bg-gradient-to-r from-[#f5f5f5] to-[#d5d5d5]" : "text-black"
          } bg-clip-text`}
        >
          Priyanshu
        </div>
        <button className="p-2 rounded-full focus:outline-none" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </button>
      </header>
      <main className="pt-20">
        <section className="p-8 text-center">
          <h1
            className={`text-4xl font-bold ${
              isDarkMode ? "text-transparent bg-gradient-to-r from-[#f5f5f5] to-[#d5d5d5]" : "text-black"
            } bg-clip-text`}
          >
            Priyanshu
          </h1>
          <p className={`mt-4 text-lg font-mono ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills,
            and contact details.
          </p>
        </section>
        <section className="p-8">
          <div
            className={`mb-8 p-6 ${
              isDarkMode
                ? "bg-gradient-to-br from-[#1C1C1E] via-[#111111] to-[#111111] border-[#545358]"
                : "bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc]"
            } rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Jul 1, 2023</div>
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>unkey.dev</h2>
            <p className={`mt-2 font-mono ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys
              for your users. It's built with security and speed in mind.
            </p>
          </div>
          <div
            className={`p-6 ${
              isDarkMode
                ? "bg-gradient-to-br from-[#1C1C1E] via-[#111111] to-[#111111] border-[#545358]"
                : "bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc]"
            } rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Apr 1, 2023</div>
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>planetfall.io</h2>
            <p className={`mt-2 font-mono ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations
              around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows
              you to find out and monitor it continuously.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
