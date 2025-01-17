import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32"/>
      <link rel="apple-touch-icon" href="/icon?<generated>"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/icon?<generated>"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/icon?<generated>"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/icon?<generated>"/>
      {/*<meta*/}
      {/*    httpEquiv='Content-Security-Policy'*/}
      {/*    content="default-src 'self'; img-src 'self' data:; media-src 'self'; connect-src 'self'; font-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"*/}
      {/*/>*/}

      <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data:; media-src 'self'; connect-src 'self'; font-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.youtube.com https://youtu.be;"
      />
      <title>BoundaryLab</title>
    </head>
    <body
    >
    {children}
    </body>
    </html>
  );
}
