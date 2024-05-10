import Nav from "@/components/nav/Nav";
import "./globals.css";
import { figtree, fraunces } from "@/lib/font-utils";

export const metadata = {
  title: "Bestinhere demo",
  description: "UI testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree} ${fraunces} font-sans`}>
      <body className="text-body text-gray-12">
        <Nav />
        {children}
      </body>
    </html>
  );
}
