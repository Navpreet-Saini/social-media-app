import SessionProvider from "@/components/SessionProvider";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
