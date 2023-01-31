import { Footer, Gallery, Home, Navbar, Services } from "./components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <Gallery />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
