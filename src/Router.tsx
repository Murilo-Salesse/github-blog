import { Route, Routes } from 'react-router-dom';
import { Blog } from './Pages/Blog';
import { Post } from './Pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}
