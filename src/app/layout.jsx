import GlobalNav from "@/components/nav/GlobalNav";
import "./globals.css";
import { figtree, fraunces } from "@/lib/font-utils";

export const metadata = {
  title: "Bestinhere",
  description: "UI testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree} ${fraunces} font-sans`}>
      <body className="text-body text-gray-12">
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
