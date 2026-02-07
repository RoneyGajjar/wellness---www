import "./globals.css";
import { Bricolage_Grotesque } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
