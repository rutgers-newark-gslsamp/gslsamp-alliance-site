//layout of content included on EVERY page
import '../app/styles/globals.css'
import type { Metadata } from 'next'
import NavBar from '../src/components/NavBar'
import Copyright from '../src/components/Copyright'

export const metadata: Metadata = {
  title: 'GS-LSAMP',
  description: 'The Louis Stokes Alliance for Minority Participation (LSAMP) program, funded by the National Science Foundation, is designed to increase the number of professionals from minority groups that are traditionally underrepresented in non-medical STEM fields (science, technology, engineering and math).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='font-serif'>
        <div className='min-h-screen flex flex-col flex-grow bg-off_white'>
          <NavBar />
          {children}
        </div>
        <footer className='mt-full text-left'>
          <Copyright currentDate={new Date()} />
      </footer>
      </body>
    </html>
  )
}
