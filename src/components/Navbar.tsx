'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">MyHost</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Domains</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">Hosting</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">Email</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}