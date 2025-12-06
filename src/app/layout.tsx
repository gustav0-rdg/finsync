import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // importante!
import "../lib/fontawesome"; // configura a lib (passo 2)


export const metadata: Metadata = {
  title: "FinSync",
  description: "Sua chance de se organizar financeiramente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
