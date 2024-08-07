import { useState } from "react";


const App = ({ darkTheme, toggleTheme }) => {
    return (
        <div className="container" data-theme={darkTheme ? "dark" : "light"}
            onMouseOver={toggleTheme}
            onMouseLeave={toggleTheme}

        >
            My Site
        </div>
    )
}

const withTheme = (Comonent) => {
    function Func(props) {
        const [darkTheme, setDarkTheme] = useState(false);

        return (<Comonent {...props} darkTheme={darkTheme} toggleTheme={() => setDarkTheme(!darkTheme)} />)
    };

    return Func;
}

export default withTheme(App);