import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Loading from "./Loading";
import Navbar from "./Navbar";

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
  }, [router.events]);

  // Check if the current route is '/'
  const isRootRoute = router.pathname === "/";

  return (
    <>
      <Head>
        <title>Anime Cards</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2 relative w-full min-h-screen">
          <Navbar />
          {children}
          {!isRootRoute && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
