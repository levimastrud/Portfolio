import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Projects from './Projects';
import About from './About';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
