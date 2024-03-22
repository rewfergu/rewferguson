import './globals.css'
import Script from 'next/script'
// import { Inter } from "next/font/google";
import { Header } from '../components/Header'
import styles from './layout.module.css'
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Robert Ferguson: Web Engineer',
  description: 'Personal site for Robert Ferguson.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>
            <div className={styles.contentWrap}>{children}</div>
          </main>
        </div>
        <div id="p5Canvas" />
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js" />
      <Script src="/p5-sketch.js" strategy="beforeInteractive" />
    </html>
  )
}
