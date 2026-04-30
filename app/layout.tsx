export const metadata = {
  title: 'Bizu do Cadete - Plataforma de Questionários',
  description: 'Prepare-se para concursos com nossa plataforma de questionários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
