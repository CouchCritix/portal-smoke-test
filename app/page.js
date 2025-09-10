import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Employer Portal</h1>
      <p>Simple test build. Click below to see a sample dashboard.</p>
      <Link href="/dashboard">Open Dashboard</Link>
    </main>
  );
}
