export default function Dashboard() {
  return (
    <main style={{
      maxWidth: "960px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Employer Dashboard
      </h1>

      {/* Compliance Tasks Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Compliance Tasks</h2>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
          <li>✔ Wage Theft Prevention Notice provided to new hires</li>
          <li>✔ Harassment Prevention Training tracked</li>
          <li>✔ Meal/Rest Break policy acknowledged and posted</li>
          <li>✔ Paystub compliance spot-check complete</li>
        </ul>
      </section>

      {/* Documents Section */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Documents</h2>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
          <li><a href="#">Employee Handbook.pdf</a></li>
          <li><a href="#">Meal & Rest Break Policy.docx</a></li>
          <li><a href="#">Workplace Safety Checklist.xlsx</a></li>
        </ul>
      </section>
    </main>
  );
}
