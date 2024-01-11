import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from './pages/Dogs';
import NewUpdate from './pages/NewUpdate';

export default function DogsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dogs/>} />
        <Route path="/newupdate/:dog_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}