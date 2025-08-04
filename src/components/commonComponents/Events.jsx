import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import carouselOne from "@/assets/events/01_event_image.jpg";

import carouselTwo from "@/assets/events/02_event_image.jpg";
import carouselThree from "@/assets/events/03_event_image.jpg";
import carouselFour from "@/assets/events/04_event_image.jpg";
import carouselFive from "@/assets/events/05_event_image.jpg";
import carouselSix from "@/assets/events/06_event_image.jpg";

const Events = () => {
  return (
    <div className="container mx-auto p-4 md:mt-60 mb-20 mt-20 ">
      <h2 className="font-bold mb-4 md:text-5xl text-center text-[#484D49] text-4xl">
        Green Events
      </h2>
      <p className="md:text-b mx-auto text-[#484D49] mb-10 md:w-2/3 text-center font-medium text-sm w-11/12">
        We host our Annual Green School Conference during the United Nations
        General Assembly with Climate Week NYC every year on September 24 in New
        York City to bring school leaders together to explore the future of
        responsible education. We also host the World Education Forum with the
        Davos Congress that hosts the World Economic Forum to bring
        Entrepreneurs and Educators together to create the path of a Greener
        Economy
      </p>
      <Carousel className="w-full mt-20">
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselOne}
                  alt="Event 1"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselTwo}
                  alt="Event 2s"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselThree}
                  alt="Event 2s"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselFour}
                  alt="Event 4"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselFive}
                  alt="Event 2s"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center">
                <img
                  src={carouselSix}
                  alt="Event 2s"
                  className="object-cover rounded-lg mb-4 w-full h-full"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Events;
