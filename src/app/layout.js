// Styles
import './globals.css'

// Components
import Header from '@/components/Header'
import SmoothScroll from '@/components/SmoothScroll'
import AiChatbot from '@/components/AiChatbot'

export const metadata = {
  title: 'Keerthivasan | Full Stack Developer (5+ Years)',
  description: 'Full Stack Developer with 5+ years of experience specializing in React.js, Next.js, Node.js, TypeScript, and AWS cloud infrastructure.',
  keywords: ['Full Stack Developer', 'React.js', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'OpenTelemetry', 'Keerthivasan'],
  authors: [{ name: 'Keerthivasan' }]
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='font-sans text-white min-h-screen flex flex-col antialiased selection:bg-emerald-400 selection:text-black'>
        <SmoothScroll>
          <Header />
          <main className='flex-grow pt-20 pb-12 px-4 sm:px-8 max-w-6xl mx-auto w-full'>
            {children}
          </main>
          <AiChatbot />
        </SmoothScroll>
      </body>
    </html>
  )
}
