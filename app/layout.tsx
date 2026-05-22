import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gino Diblasi | Cinematic Designer & Developer",
  description:
    "Premium cinematic designer/developer portfolio for hospitality, lifestyle, and local brand concept experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
