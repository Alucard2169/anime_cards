import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-full w-full'>
      <Head />
      <body className='h-full w-full m-0 p-0 box-border'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
