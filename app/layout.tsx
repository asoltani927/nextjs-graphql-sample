import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/providers/store.provider";
import ApolloClientProvider from "@/providers/apollo.provider";

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ApolloClientProvider>
            {children}
          </ApolloClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
