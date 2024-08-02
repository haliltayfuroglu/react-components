import { useState } from "react";
import Layout from "./components/layout/Layout";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import ToDoManager from "./components/todo/ToDoManager";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ThemeProvider from "./contexts/ThemeContext";


const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <TodosDataProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </TodosDataProvider>
  );
};
export default App;
