import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "Weather app using api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
