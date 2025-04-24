import { Outlet } from "react-router";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <BackgroundImage />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
