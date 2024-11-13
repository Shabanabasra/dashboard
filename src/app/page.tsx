"use client"; 


import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Cryptocurrency Dashboard</h1>
      <Link href="/coinlayer" className="dashboardLink">Go to Dashboard</Link>
    </div>
  );
}