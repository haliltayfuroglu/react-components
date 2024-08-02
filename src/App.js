import { createContext, useState } from "react";
import Layout from "./components/layout/Layout";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import ToDoManager from "./components/todo/ToDoManager";
import { TodosDataProvider } from "./contexts/ToDosDataContext";



export const ThemeContext = createContext({});

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <TodosDataProvider>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <Layout >
          <ToDoListWithToolbar
            displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}
            import={important} setImportant={setImportant}
            searchText={searchText} setSearchText={setSearchText}
          >
            <ToDoManager
              displayStatus={displayStatus}
              important={important}
              searchText={searchText}
            />
          </ToDoListWithToolbar>
        </Layout>
      </ThemeContext.Provider>
    </TodosDataProvider>
  );
};
export default App;
