import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Components/NotFound/NotFound";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
