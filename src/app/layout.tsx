import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ToastContainer } from "react-toastify"
const poppinsThin = Poppins({ subsets: ['latin'], weight: '200' })
const poppinsMedium = Poppins({ subsets: ['latin'], weight: '300', variable: '--font-poppins-medium' })

export const metadata: Metadata = {
  title: 'A Descart',
  description: 'Descubra a excelência em produtos descartáveis médicos e odontológicos. Encontre suprimentos de qualidade para sua clínica ou consultório. Proteja a saúde dos seus pacientes com nossa ampla seleção de produtos confiáveis e seguros',
  authors: {
    name: "Aenã Martinelli",
    url: "https://aenamartinelli.com.br"
  },
  creator: "Aenã Martinelli",
  category: "Descartáveis médicos e odontológicos"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
        <script crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" />
        <link rel="icon" href="favicon.svg" type="image/svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11316323810">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-11316323810');
        </script>
      </head>

      <body className={`${poppinsThin.className} ${poppinsMedium.variable}`}>
        {children}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
