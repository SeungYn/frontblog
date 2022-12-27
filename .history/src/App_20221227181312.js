import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostListPage />} />
      </Routes>
    </>
  );
}

export default App;
