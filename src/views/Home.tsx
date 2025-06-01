import western from "../assets/western.jpg";

const Home = () => {
  return (
    <div className='h-full w-full p-4 flex flex-col gap-3'>
      <h1 className='h-auto w-full text-center text-lg font-bold'>
        Welcome to Decasa!{" "}
      </h1>
      <div className='h-auto w-full flex flex-col gap-3 md:gap-0 md:p-10'>
        <div className='md:flex md:gap-2 gap-2'>
          <p className='md:pr-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
          <img
            src={western}
            className='hidden md:block h-auto md:max-w-1/2'
          ></img>
        </div>
        <div className='md:flex md:gap-2 gap-2'>
          <img
            src={western}
            className='hidden md:block md:d h-auto md:max-w-1/2'
          ></img>
          <p className='md:p-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
