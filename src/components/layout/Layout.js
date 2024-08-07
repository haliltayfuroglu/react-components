import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext, ThemeProvider } from "../../contexts/ThemeContext";

const Inner = ({ children }) => {
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

const Layout = (props) => {

  return (
    <ThemeProvider>
      <Inner {...props} />
    </ThemeProvider>

  )
}

export default Layout;
