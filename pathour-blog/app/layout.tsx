// app/layout.tsx
import './globals.css';
import Script from 'next/script';
import { ReactNode } from 'react';

import Preloader from '@/components/Preload';

export const metadata = {
  title: 'Pathour | Authentic Small Group Trips in Indonesia',
  description: 'Join meaningful small group trips in Indonesia...',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* External fonts & icons */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Local styles (from public folder) */}
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/css/jquery.timepicker.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <link rel="icon" href="/images/logos/icon.png" />
      </head>
      <body>
        <Preloader />

        {children}

        {/* Footer scripts JS (agar animasi & carousel jalan) */}
        <Script src="/js/jquery.min.js" />
        <Script src="/js/jquery-migrate-3.0.1.min.js" />
        <Script src="/js/popper.min.js" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/jquery.easing.1.3.js" />
        <Script src="/js/jquery.waypoints.min.js" />
        <Script src="/js/jquery.stellar.min.js" />
        <Script src="/js/owl.carousel.min.js" />
        <Script src="/js/jquery.magnific-popup.min.js" />
        <Script src="/js/jquery.animateNumber.min.js" />
        <Script src="/js/bootstrap-datepicker.js" />
        <Script src="/js/scrollax.min.js" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
