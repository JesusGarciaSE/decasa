import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AboutImageData } from "../constants/ImageData";
import { ICustomizableComponent } from "../models/ComponentModels";

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5,
  // },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3,
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 1,
  // },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageCarousel: React.FC<ICustomizableComponent> = ({ className }) => {
  return (
    <div className='relative h-auto w-full'>
      <div className='absolute inset-0 bg-decasa opacity-25'></div>
      <Carousel
        responsive={responsive}
        showDots={true}
        containerClass={className}
        infinite={true}
        keyBoardControl={true}
        dotListClass='carousel-container'
        itemClass=''
      >
        {AboutImageData.map((img, key) => (
          <img
            className='h-auto max-w-1/2 object-contain mx-auto'
            key={key}
            src={img}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
