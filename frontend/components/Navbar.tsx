'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link href="/" className="text-xl font-bold">
        UI Assistant
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/requests">Requests</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}
