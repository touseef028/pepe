import { Inter } from 'next/font/google'
import ThemeRegistry from '../../utils/ThemeRegistery'
import DrawerAppBar from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Just Pepe',
  description: 'Just Pepe is a mean of acculturation for the injective chain. Building a community to laugh, thrive and earn together',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#f9f4ec'}} className={inter.className}>
      <ThemeRegistry options={{ key: 'mui-theme' }}>
      <DrawerAppBar/>
      {children}
      </ThemeRegistry>
      </body>
    </html>
  )
}
