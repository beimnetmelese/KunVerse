import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Kun Verse 🌌",
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
