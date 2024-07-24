import "../styles/globals.css";

export const metadata = {
  title: "Priyanshu",
  description: "~",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;