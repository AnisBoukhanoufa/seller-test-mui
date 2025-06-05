import type { Metadata } from "next";
// import { Montserrat,  } from "next/font/google";
import "./globals.css";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
//   variable: "--font-montserrat",
// });

// const roboto = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
//   variable: "--font-roboto",
// });

export const metadata: Metadata = {
  title: "COD TOOP",
  description: "فقط ابدأ",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "COD TOOP",
  },
  openGraph: {
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/cod-toop-3195b.appspot.com/o/assets%2Fog.jpg?alt=media&token=05307554-043d-4353-9162-757c80894659",
      },
    ],
  },
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/cod-toop-3195b.appspot.com/o/assets%2Flogo.ico?alt=media&token=9f3f83ca-011f-4d96-8",
    apple: "https://codtoop.com/assets/logo192-70e51085.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
