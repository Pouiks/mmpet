import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: 'Meetmypet',
  description: 'Find your pet\'s bestfriend near you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  )
}
