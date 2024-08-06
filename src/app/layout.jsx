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
      <body className="bg-bg text-body text-text">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="fixed-wrapper">
            <GlobalNav />
            <div className="scrollable-content">{children}</div>
          </div> */}

          <div className="">
            <GlobalNav />
            <div className="">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// removed min-h-screen from body class.
