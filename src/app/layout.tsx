import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const helvetica = localFont({
  src: "../../public/fonts/Helvetica_Neue_LT_Std_Black_Condensed_Oblique.otf",
  variable: "--font-helvetica",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${helvetica.variable} bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
