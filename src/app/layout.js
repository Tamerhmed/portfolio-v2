import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tamer Ahmed | Frontend Developer & Educator',
  description:
    'Portfolio of Tamer Ahmed – Frontend Developer and JavaScript Educator based in Melbourne, building accessible, responsive web apps with React, Next.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='min-h-screen bg-slate-900 text-white relative overflow-x-hidden'>
          {/* Background pattern or gradient can be added here */}
          <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900' />

          {/* Content */}
          <div className='relative z-10 px-4 md:px-0'>{children}</div>
        </div>
      </body>
    </html>
  );
}
