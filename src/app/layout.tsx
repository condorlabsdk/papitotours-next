import type { Metadata } from "next";
import "./globals.css";
import {StartMockWorker} from "@/common/component/mockServer"

export const metadata: Metadata = {
  title: "Papito Tours App",
  description: "Aplicacion generado por desarrolladores profesionales en sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <StartMockWorker>
        {children}
        </StartMockWorker>
      </body>
    </html>
  );
}
