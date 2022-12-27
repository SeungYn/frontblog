import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostListPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/@:username'>
          <Route index element={<PostListPage />} />
          <Route path=':postId' element={<PostPage />} />
        </Route>
        <Route path='/:username' element={<PostListPage />} />
      </Routes>
    </>
  );
}

export default App;
