import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProductProvider } from '../context/ProductContext';

import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Item Manager',
  description: 'Catalog for products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ProductProvider>
          <NavBar />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
