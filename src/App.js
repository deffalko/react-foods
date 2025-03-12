import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contact} />
            <Route Component={NotFound} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
