import Header from "@/components/Header";

import "../styles/globals.css";

const Layout = ({ children }) => {
  return (
    <html>
      <body className=" p-5">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
