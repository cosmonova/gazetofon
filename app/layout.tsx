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
          content="default-src 'self'; img-src 'self' data:; media-src 'self' https://s3.eu-west-1.amazonaws.com; connect-src 'self'; font-src 'self' data: https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'  https://fonts.googleapis.com; frame-src 'self' https://www.youtube.com https://youtu.be;"
      />
      <title>BoundaryLab</title>
      <link href="https://fonts.googleapis.com/css2?family=Badeen+Display&display=swap" rel="stylesheet"/>
    </head>
    <body
    >
    {children}
    </body>
    </html>
  );
}
