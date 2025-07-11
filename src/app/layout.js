import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "HTB Academy",
  description: "Official Website of Himalyan Torch Bearers Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
