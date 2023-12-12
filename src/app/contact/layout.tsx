import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Providers } from '../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kontak Kami | Kellner',
  description: 'Generated by create next app',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang='id'>
      <div className={inter.className}>
        <Providers>{children}</Providers>
      </div>
    </section>
  );
}
