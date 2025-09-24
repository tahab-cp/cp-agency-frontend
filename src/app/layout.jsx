import { Onest } from "next/font/google";
import "../styles/globals.css";
import Script from "next/script";

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

        {/* Your custom script */}
        <Script id="mockupview-script" strategy="afterInteractive">
          {`
            (function(d, t, g, k) {
              var ph = d.createElement(t),
              s = d.getElementsByTagName(t)[0],
              t = (new URLSearchParams(window.location.search)).get(k);
              t && localStorage.setItem(k, t);
              t = localStorage.getItem(k);
              ph.type = 'text/javascript';
              ph.async = true;
              ph.defer = true;
              ph.charset = 'UTF-8';
              ph.src = g + '&v=' + (new Date()).getTime();
              ph.src += t ? '&' + k + '=' + t : '';
              s.parentNode.insertBefore(ph, s);
            })(document, 'script', '//mockupview.com/?p=6573&ph_apikey=bdaaa910644e45726568672971208bef', 'ph_access_token');
          `}
        </Script>

        <Script
          id="userback-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.Userback = window.Userback || {};
            Userback.access_token = "A-ObLRceecBcxwDVHslQjewa6mV";
          `,
          }}
        />
        <Script
          id="userback-script"
          strategy="afterInteractive"
          src="https://static.userback.io/widget/v1.js"
        />
      </body>
    </html>
  );
}
