import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.5rem" }}>
        
        {/* Header / Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 10px",
              borderRadius: 999,
              background: "#eef2ff",
              color: "#3730a3",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 0.4
            }}
          >
            Beta Preview
          </span>
          <h1
            style={{
              fontSize: "2.25rem",
              lineHeight: 1.2,
              margin: "0.75rem 0 0.5rem",
              color: "#111827"
            }}
          >
            Employer Portal
          </h1>
          <p style={{ color: "#4b5563", fontSize: 16, maxWidth: 720 }}>
            A simple portal for employers and business owners to manage compliance tasks and key documents.
          </p>
        </header>

        {/* Callouts */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 24
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 14, color: "#111827" }}>
              What’s inside
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "#374151",
                fontSize: 14,
                lineHeight: 1.7
              }}
            >
              <li>Compliance task checklist</li>
              <li>Core document links</li>
              <li>Clean, beta-friendly UI</li>
            </ul>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 14, color: "#111827" }}>
              Coming soon
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "#374151",
                fontSize: 14,
                lineHeight: 1.7
              }}
            >
              <li>Login & roles</li>
              <li>Subscriptions & billing</li>
              <li>Admin content management</li>
            </ul>
          </div>
        </section>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12 }}>
          <Link
            href="/dashboard"
            style={{
              textDecoration: "none",
              background: "#111827",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              fontWeight: 600
            }}
          >
            Open Dashboard
          </Link>

          <a
            href="#"
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#111827",
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              fontWeight: 600
            }}
          >
            Request Access
          </a>
        </div>
      </div>
    </main>
  );
}
