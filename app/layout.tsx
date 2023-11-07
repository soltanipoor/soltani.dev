import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soltani.dev",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-xl py-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/">
              <Logo size={90} />
            </Link>

            <nav className="flex gap-2 text-sm">
              <Link href="/" className="text-stone-500">
                Home
              </Link>
              <Link href="/blog" className="text-stone-500">
                Blog
              </Link>
            </nav>
          </header>

          <main className="mt-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
