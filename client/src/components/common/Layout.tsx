import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  paddingY?: string;
}

const Layout = ({ children, paddingY }: LayoutProps) => {
  return (
    <div className="relative ">
      <Header />
      <main className={`mx-auto max-w-[1200px] ${paddingY}`}>{children}</main>
    </div>
  );
};

export default Layout;
