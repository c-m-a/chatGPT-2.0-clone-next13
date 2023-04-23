import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

import '@/styles/globals.css'

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <main className="flex">
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <SideBar />
            </div>
            {/* ClientProvider - Notification */}
            
            <div className="bg-[#343541] flex-1">{children}</div>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
