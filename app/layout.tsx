import Header from './Header';
import Footer from './Footer';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
