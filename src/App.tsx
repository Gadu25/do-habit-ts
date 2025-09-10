import Main from "@/layouts/Main";
import { Routes, Route } from "react-router";

//pages
import Home from "@/pages/Home";
import Habits from "@/pages/Habits";

function App() {

  return (
    <>
      <Main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="habits" element={<Habits/>}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
