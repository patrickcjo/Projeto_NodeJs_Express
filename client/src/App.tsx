import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreateNotepadRoute } from "./routes/CreateNotepadRoute";
import { ContadorRoute } from "./routes/ContadorRoute";
import { ViewNotepadRoute } from "./routes/ViewNotepadRoute";
import { EditNotepadRoute } from "./routes/EditNotepadRoute";
import { NotepadPageRoute } from "./routes/NotepadPageRoute";
import { Footer } from "./components/Footer"
import { PgErrorRoute } from "./routes/PgErroRoute";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/contador" element={<ContadorRoute />} />
          <Route path="/" element={<HomeRoute />} />
          <Route path="/criar-notepad" element={<CreateNotepadRoute />} />
          <Route path="/ver-notepad/:id" element={<ViewNotepadRoute />} />
          <Route path="/editar-notepad/:id" element={<EditNotepadRoute />} />
          <Route path="/notepads/:page" element={<NotepadPageRoute />} />
          <Route path="pg-error-route" element={<PgErrorRoute/>}/>
        </Routes>
        <Footer className="bg-black flex justify-center items-center"/>
      </div>
    </BrowserRouter>
  );
}
