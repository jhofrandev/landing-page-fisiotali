import { Carousel, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  indicators: {
    base: "h-3 w-3 rounded-full",
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    wrapper: "absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3",
  },
};

export default function HomeTemplate() {
  const images = [
    "https://ayudawp.com/wp-content/uploads/2017/12/featured-social-media-image-size.png",
    "https://ayudawp.com/wp-content/uploads/2017/12/featured-social-media-image-size.png",
    "https://ayudawp.com/wp-content/uploads/2017/12/featured-social-media-image-size.png",
    "https://ayudawp.com/wp-content/uploads/2017/12/featured-social-media-image-size.png",
    "https://ayudawp.com/wp-content/uploads/2017/12/featured-social-media-image-size.png",
  ];

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={true} theme={customTheme}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
