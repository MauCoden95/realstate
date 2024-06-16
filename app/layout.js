import { Header } from "@/components/Header";
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
      </body>
    </html>
  );
}
