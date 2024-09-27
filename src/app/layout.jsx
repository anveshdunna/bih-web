import "./globals.css";
import { figtree, fraunces } from "@/lib/font-utils";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalNav from "@/components/nav/GlobalNav";

export const metadata = {
  title: "Bestinhere",
  description: "UI testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree} ${fraunces} font-sans`}>
      <body className="min-h-screen bg-bg text-bodyLgTall text-fg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <GlobalNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
