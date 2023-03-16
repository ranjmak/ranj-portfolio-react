import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Blog from './components/Blog';  for the future
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';

function App() {
  const personalDetails = {
    name: "Ranjit Makwana",
    signature: "...Ranj",
    location: "UK Based, Global in practice",
    moniker: "Unlocking limitless potential.",
    tagline: "In partnership, we can achieve the impossible..........",
    email: "ranjit.makwana@gmail.com",
    availability: "Always up for challenging and interesting projects",
    brand:
      "With a keen interest in all things Science and Technology, I find the new ideas in the Quantum arena, the Cosmos"
      +"General Artificial Intelligence and the future of our Healthcare, both exciting and inspiring."
      +"I am open to most 'bread & butter' projects but particularly innovative ones in new tech.",
  };

  return (
    <Router basename="/ranj-portfolio-react">
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home personalDetails={personalDetails} />} />
          <Route path="about" element={<About personalDetails={personalDetails} />} />
          {/* <Route path="blog" element={<Blog />} /> for the future */}
          <Route path="projectGallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact personalDetails={personalDetails} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

