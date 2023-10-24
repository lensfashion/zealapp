import './globals.css'
import type { Metadata } from 'next'
import Navbar from './navbar'
import Footer from './components/footer'


export const metadata: Metadata = {
  title: 'PictoZeal',
  description: 'A new form of photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="text-color bg-bg-color"> */}
        <div>
          <Navbar />

          <div>{children}</div>
          <Footer />

        </div>
      {/* </body> */}
    </html>
  );
}
