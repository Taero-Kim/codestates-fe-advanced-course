import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Post from "./routes/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="post/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
