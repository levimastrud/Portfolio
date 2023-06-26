import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About';
import Blog from './Blog';
// Functional Portfolio
import Zenn from './FunctionalPortfolio/Zenn'
import EnigmaBistro from './FunctionalPortfolio/EnigmaBistro'
import TicketGo from './FunctionalPortfolio/TicketGo'
import ForgedInIsolation from './FunctionalPortfolio/ForgedInIsolation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/zenn" element={<Zenn />} />
          <Route path="/enigma-bistro" element={<EnigmaBistro />} />
          <Route path="/ticketgo" element={<TicketGo />} />
          <Route path="/forged-in-isolation" element={<ForgedInIsolation />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
