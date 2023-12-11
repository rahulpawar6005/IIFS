import ReactDOM from "react-dom/client";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home/Home";
import Services from "./component/Services"
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
import About  from "./component/About";
import Testimonial from "./component/Testimonial/Testimonial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="testimonial" element={<Testimonial/>}/>

        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
