import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import './globals.css'

export const metadata = {
  title: "Real State",
  description: "Bienes raíces",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white overflow-x-hidden"> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
