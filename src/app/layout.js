import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://embed.binkies3d.com/integrations/GujD99Q6/krpxeb72/script.js"
        async
        referrerPolicy="no-referrer-when-downgrade"
      />
    </html>
  );
}
