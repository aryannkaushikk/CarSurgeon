import "./styles.css";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Review from "./Reviews/Review";
import Welcome from "./Welcome/Welcome";

export default function App() {
  return (
    <div id="App">
      <Welcome />
      <Services />
      <Review />
      <Footer />
    </div>
  );
}
