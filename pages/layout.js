import "../styles/globals.css";

export const metadata = {
  title: "Priyanshu",
  description: "~",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}