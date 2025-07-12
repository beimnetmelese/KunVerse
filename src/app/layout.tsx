import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Beimnetverse 🌌",
  description:
    "Dive into the multiverse of Beimnet Melese – fullstack dev, bot master, React wizard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
