import { Outlet } from "react-router";
import decasaman from "../assets/decasaman.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className='relative flex flex-col h-screen min-h-screen items-center overflow-x-scroll'>
      <img
        src={decasaman}
        alt='Background'
        className={
          "h-auto w-auto absolute -z-10 inset-0 object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"
        }
      />
      <Header />
      <NavBar />
      <div className='w-full h-auto grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
