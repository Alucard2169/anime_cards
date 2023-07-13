import Head from "next/head";
import { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <Head>
          
            <title>Otaku Cards</title>
            <link rel="icon" href="/favicon.png" />
    
        </Head>
        {children}
      </>
    );
}
 
export default Layout;