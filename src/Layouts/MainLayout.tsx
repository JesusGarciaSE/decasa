import { Outlet } from "react-router";
import decasaman from "../assets/decasaman.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className='flex flex-col w-screen min-h-screen items-center justify-center overflow-x-scroll'>
      <img
        src={decasaman}
        alt='Background'
        className={
          "h-auto max-w-full absolute inset-0 object-cover z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25"
        }
      />
      <Header />
      <div className='w-full h-auto grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
