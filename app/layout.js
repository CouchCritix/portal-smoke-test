import "./globals.css";

export const metadata = {
  title: "Employer Portal",
  description: "Legal compliance portal for employers and business owners"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
