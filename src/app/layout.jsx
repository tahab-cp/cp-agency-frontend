import { Onest } from "next/font/google";
import "../styles/globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "CreativePixels | Creative Design Agency Manchester",
    template: "CreativePixels | %s",
  },
  description:
    "We focus on being a design-driven creative agency through bespoke design and development, specialising in all things design and making businesses stand out.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
