import GlobalNav from "@/components/nav/GlobalNav";
import "./globals.css";
import { figtree, fraunces } from "@/lib/font-utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Bestinhere",
  description: "UI testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree} ${fraunces} font-sans`}>
      <body className="text-text bg-bg text-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
