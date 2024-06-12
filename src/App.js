import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
