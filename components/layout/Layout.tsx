import { FC, ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactElement;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-3xl font-bold underline">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
