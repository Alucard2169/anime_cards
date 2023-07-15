import Head from "next/head";
import { FC, ReactNode, useEffect, useState } from "react";
import Loading from "./Loading";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Otaku Cards</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isLoading ? <Loading /> : children}
    </>
  );
};

export default Layout;
