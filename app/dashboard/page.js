export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        padding: "3rem 1.5rem",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#111827"
          }}
        >
          Employer Dashboard
        </h1>

        {/* Compliance Tasks Section */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "#111827"
            }}
          >
            Compliance Tasks
          </h2>
          <ul style={{ paddingLeft: 18, lineHeight: 1.8, color: "#374151" }}>
            <li>✔ Wage Theft Prevention Notice provided to new hires</li>
            <li>✔ Harassment Prevention Training tracked</li>
            <li>✔ Meal/Rest Break policy acknowledged and posted</li>
            <li>✔ Paystub compliance spot-check complete</li>
          </ul>
        </section>

        {/* Documents Section */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 20
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "#111827"
            }}
          >
            Documents
          </h2>
          <ul style={{ paddingLeft: 18, lineHeight: 1.8, color: "#374151" }}>
            <li><a href="#" style={{ color: "#2563eb" }}>Employee Handbook.pdf</a></li>
            <li><a href="#" style={{ color: "#2563eb" }}>Meal & Rest Break Policy.docx</a></li>
            <li><a href="#" style={{ color: "#2563eb" }}>Workplace Safety Checklist.xlsx</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
