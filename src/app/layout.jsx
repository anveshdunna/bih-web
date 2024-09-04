import "./globals.css";
import { figtree, fraunces } from "@/lib/font-utils";
import { ThemeProvider } from "@/components/theme-provider";
import { DialogProvider } from "@/contexts/DialogContext";
import BodyWrapper from "./bodyWrapper";
import GlobalNav from "@/components/nav/GlobalNav";

export const metadata = {
  title: "Bestinhere",
  description: "UI testing",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree} ${fraunces} overflow-x-hidden font-sans`}
    >
      <body className="h-full w-full overflow-x-hidden bg-bg text-bodyLgTall text-fg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DialogProvider>
            <BodyWrapper>{children}</BodyWrapper>
          </DialogProvider>
          {/* <div className="fixed-wrapper">
            <GlobalNav />
            <div className="scrollable-content">{children}</div>
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

// removed min-h-screen from body class.
{
  /* <body className="bg-bg text-bodyLgTall text-fg"></body> */
}
