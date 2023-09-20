import { Carousel } from "@material-tailwind/react";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";
import homeelectronics from "../assets/homeelectronics.jpg"

const HomePage = () => {
  return (
    <div>
      {/* <Carousel className="rounded-xl" transition={{ duration: 1 }}>
        <img
          src={e1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={e2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={e3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel> */}


<section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Your one-stop destination for<br />electronics spare parts and services
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          catering to a diverse array of major industry players.{' '}
          
            
          </p>
          
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={homeelectronics} alt="hero image" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomePage;
