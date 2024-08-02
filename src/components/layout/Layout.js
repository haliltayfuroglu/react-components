import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext } from "../../App";

const Layout = ({ children }) => {
  const layoutVersion = "Layout Version 2.0";
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header layoutVersion={layoutVersion} />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
