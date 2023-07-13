import { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
    return <>{children}</>;
}
 
export default Layout;