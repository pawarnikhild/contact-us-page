import { useState } from "react";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import ContactText from "./components/ContactText/ContactText";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavigationBar />
      <main className="main_container">
        <ContactText />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
