export default function Privacy() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "3rem 1.5rem",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#111827"
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ marginBottom: "1rem", color: "#374151" }}>
        We respect your privacy and are committed to protecting your information. This policy explains how we handle data on the Employer Portal.
      </p>
      <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: "#374151" }}>
        <li>We may collect limited usage data to improve the portal experience.</li>
        <li>We do not sell or share your personal information with third parties.</li>
        <li>Any documents you upload or generate remain your property.</li>
        <li>We use reasonable security measures to protect your data, but cannot guarantee complete security.</li>
      </ul>
    </main>
  );
}
