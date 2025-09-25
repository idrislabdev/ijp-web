import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/components/forms.css";
import "@/styles/components/modals.css";
import "rsuite/Message/styles/index.css";
import "rsuite/useToaster/styles/index.css";
import "rsuite/Modal/styles/index.css";
import "rsuite/Animation/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNICORP | Growth Through Innovation",
  description:
    "UNICORP adalah Grup perusahaan yang bergerak di berbagai bidang industri, diantaranya: Makanan, Pertanian, Retail serta Industri lainnya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
