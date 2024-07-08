import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/general/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Timbu',
  description: 'Best devices for your smart home.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
