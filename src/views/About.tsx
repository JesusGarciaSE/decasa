import ImageCarousel from "../components/ImageCarousel";
const About = () => {
  return (
    <div className='relative h-full w-full flex flex-col gap-3'>
      <ImageCarousel className='h-60 w-full md:h-80'></ImageCarousel>
      <div className="p-4">
        <h1 className="text-lg font-bold">Title </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </div>
  );
};

export default About;
