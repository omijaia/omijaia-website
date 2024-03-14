import StyledJsxRegistry from './registry'

import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <title>Web & Software Development & Visual Identity • Omijaia</title>
      </head>
      <body suppressHydrationWarning={true}> 
        <StyledJsxRegistry>{children}</StyledJsxRegistry>      </body>
    </html>
  );
}
