import React from "react";

// Page Routing
import PageRouting from "./routers/PageRouting";

// Import components here
import Navbar from "./components/navbar/Navbar";

// Import pages here

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <PageRouting />
    </div>
  );
};

export default App;
