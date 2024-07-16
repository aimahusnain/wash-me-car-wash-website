import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomTabs from '@/components/CustomTabs'
import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useRef } from "react";
import Image from "next/image";

const Facilities: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const tabsData = [
    {
      label: '50-Foot Hand Wash Tunnel',
      content: (
        <p>
          Indulge your vehicle in the ultimate pampering experience at Wash Me Car Wash. 
          Our 50-foot hand wash tunnel combines cutting-edge technology with a gentle touch, 
          ensuring a pristine finish every time. No brushes here – just a safe and effective 
          brush-free system. Simply put your vehicle in neutral, relax, and let Wash Me Car 
          Wash elevate your car care routine.
        </p>
      ),
    },
    {
      label: '5 Self-Service Bays (Open 24 Hrs)',
      content: (
        <p>
          Take control of your car care journey with Wash Me Car Wash&apos;s five self-service bays, 
          available 24/7 for your convenience. Whether you&apos;re driving a car, motorcycle, or 
          towing a trailer, our self-service bays cater to all your needs. Enjoy a bright and 
          clean environment, equipped with user-friendly tools that make maintaining your 
          vehicle a breeze. At Wash Me Car Wash, it&apos;s more than just self-service – it&apos;s a 
          personalized experience designed for you.
        </p>
      ),
    },
  ];

  return (
    <div
      className="flex flex-col w-full justify-center items-center mt-3 bg-primaryBlue-200 px-5 pb-3 text-white"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
    >
      <div className="text-center flex items-center flex-col sm:flex-row gap-2 mb-2 justify-between">
        <Image
          loading="lazy"
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1stlogo.png"
          alt="e"
          width={200}
          height={100}
          className="w-fit h-[100px] hidden lg:block"
        />
        <div className="flex justify-center items-center w-full sm:hidden">
          <Carousel className="w-full text-black" plugins={[plugin.current]}>
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center w-full">
                {" "}
                <Image
                  loading="lazy"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/logo11.png"
                  alt="e"
                  width={200}
                  height={200}
                  className="w-fit h-fit"
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center w-full">
                {" "}
                <Image
                  loading="lazy"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/logo22.png"
                  alt="e"
                  width={200}
                  height={200}
                  className="w-fit h-fit"
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center w-full">
                <Image
                  loading="lazy"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/100.png"
                  alt="sfde"
                  width={200}
                  height={200}
                  className="w-fit h-fit"
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center w-full">
                <Image
                  loading="lazy"
                  src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/google.png"
                  alt="e"
                  width={200}
                  height={200}
                  className="w-fit h-fit"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full">
          <div className="w-full items-center sm:flex hidden justify-center mt-7">
            <Image
              loading="lazy"
              src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1stlogo.png"
              alt="e"
              width={200}
              height={100}
              className="w-fit h-[100px] lg:hidden block"
            />
            <Image
              loading="lazy"
              src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/100.png"
              alt="100% Image"
              width={100}
              height={100}
              className="w-fit h-[100px] lg:hidden block"
            />
            <Image
              loading="lazy"
              src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/google.png"
              alt="Google Reviews Image"
              width={100}
              height={100}
              className="w-fit h-[100px] lg:hidden block"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-8">
            State-of-the-Art Car Wash Facilities
          </h1>
            {/* <Tabs defaultValue="account" className="w-fit my-4">
              <TabsList className="h-fit">
                <TabsTrigger value="account" className="">
                  50-Foot Hand <br className="sm:hidden" /> Wash Tunnel
                </TabsTrigger>
                <TabsTrigger value="password">
                  5 Self-Service <br className="sm:hidden" /> Bays (Open 24 Hrs)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="w-full mt-2">
                Indulge your vehicle in the ultimate pampering experience at
                Wash Me Car Wash. Our 50-foot hand wash tunnel combines
                cutting-edge technology with a gentle touch, ensuring a pristine
                finish every time. No brushes here – just a safe and effective
                brush-free system. Simply put your vehicle in neutral, relax,
                and let Wash Me Car Wash elevate your car care routine.
              </TabsContent>

              <TabsContent value="password" className="w-full mt-2">
                Take control of your car care journey with Wash Me Car
                Wash&lsquo;s five self-service bays, available 24/7 for your
                convenience. Whether you&lsquo;re driving a car, motorcycle, or
                towing a trailer, our self-service bays cater to all your needs.
                Enjoy a bright and clean environment, equipped with
                user-friendly tools that make maintaining your vehicle a breeze.
                At Wash Me Car Wash, it&lsquo;s more than just self-service –
                it&lsquo;s a personalized experience designed for you.
              </TabsContent>
            </Tabs> */}
                  <CustomTabs tabs={tabsData} />

        </div>
        <Image
          loading="lazy"
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/100.png"
          alt="100% Image"
          width={100}
          height={100}
          className="w-fit h-[100px] hidden lg:block"
        />
        <Image
          loading="lazy"
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/google.png"
          alt="Google Reviews Image"
          width={100}
          height={100}
          className="w-fit h-[100px] hidden lg:block"
        />
      </div>

      <div className=" w-full justify-center items-center flex text-black">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          plugins={[plugin.current]}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <Image
                loading="lazy"
                alt="Step 1"
                width={365}
                height={400}
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fot.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <Image
                loading="lazy"
                alt="Step 2"
                width={365}
                height={400}
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fet.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              {/* <img
                loading="lazy"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/hou.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              /> */}

              <Image
                loading="lazy"
                alt="Step 3"
                width={365}
                height={400}
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/hou.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              {/* <img
                loading="lazy"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/moter.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              /> */}
              <Image
                loading="lazy"
                alt="Step 4"
                width={365}
                height={400}
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/moter.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              {/* <img
                loading="lazy"
                alt="image5"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sddsfaa.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              /> */}

              <Image
                loading="lazy"
                alt="Step 5"
                width={365}
                height={400}
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sddsfaa.webp"
                className="w-[365px] object-cover rounded-xl border-2 border-white"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-full flex justify-center items-center">
              <Image
                loading="lazy"
                width={500}
                height={500}
                alt="image6"
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/phone.webp"
                className="w-[365px] object-cover object-center h-full rounded-xl border-2 border-white"
              />

            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Facilities;
