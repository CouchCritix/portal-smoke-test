export default function Terms() {
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
        Terms of Service
      </h1>
      <p style={{ marginBottom: "1rem", color: "#374151" }}>
        Welcome to the Employer Portal. By accessing or using this portal, you agree to the following terms and conditions.
      </p>
      <ul style={{ paddingLeft: 20, lineHeight: 1.8, color: "#374151" }}>
        <li>Use of this portal is for authorized business purposes only.</li>
        <li>We provide general compliance tools and resources; this does not constitute legal advice.</li>
        <li>You are responsible for how you use the information and resources provided.</li>
        <li>We may update these terms from time to time, and continued use of the portal indicates acceptance of the updated terms.</li>
      </ul>
    </main>
  );
}
