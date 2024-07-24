"use client";

export default function Page() {
  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-[#f5f5f5] bg-opacity-50 backdrop-blur-2xl">
        <div className="text-xl font-bold text-black bg-clip-text">
          Priyanshu
        </div>
      </header>
      <main className="pt-20">
        <section className="p-8 text-center">
          <h1 className="text-4xl font-bold text-black bg-clip-text">
            Priyanshu
          </h1>
          <p className="mt-4 text-lg font-mono text-gray-600">
            Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills,
            and contact details.
          </p>
        </section>
        <section className="p-8">
          <div className="mb-8 p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-600">Jul 1, 2023</div>
            </div>
            <h2 className="text-2xl font-bold text-black">unkey.dev</h2>
            <p className="mt-2 font-mono text-gray-600">
              Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys
              for your users. It's built with security and speed in mind.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-600">Apr 1, 2023</div>
            </div>
            <h2 className="text-2xl font-bold text-black">planetfall.io</h2>
            <p className="mt-2 font-mono text-gray-600">
              I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations
              around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows
              you to find out and monitor it continuously.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}