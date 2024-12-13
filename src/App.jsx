import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/404";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Routes>
      <Route index element={<AdminPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
