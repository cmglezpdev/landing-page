import { Contact, Footer, Gallery, Home, Navbar, Services } from "./components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
        <div className="container">
          <Gallery />
          <Services />
          <Contact />
        </div>
      <Footer />
    </main>
  );
}

export default App;
