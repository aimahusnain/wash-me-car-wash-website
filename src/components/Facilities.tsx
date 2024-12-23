import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import CustomTabs from "./CustomTabs";
import React from "react";
interface LogoImageProps {
  src: string;
  alt: string;
  className?: string;
}
const DynamicCarousel = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.Carousel),
  { ssr: !1 }
);
const DynamicCarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselContent),
  { ssr: !1 }
);
const DynamicCarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselItem),
  { ssr: !1 }
);
const DynamicCarouselPrevious = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselPrevious),
  { ssr: !1 }
);
const DynamicCarouselNext = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselNext),
  { ssr: !1 }
);
const FacilitiesImages = [
  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/BE8301AF-.jpg",

  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fet.png",

  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/hou.jpg",

  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/moter.png",

  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/sddsfaa.png",

  "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/phone.jpg",
];
const tabsData = [
  {
    label: "50-Foot Hand Wash Tunnel",
    content:
      "Indulge your vehicle in the ultimate pampering experience at Wash Me Car Wash. Our 50-foot hand wash tunnel combines cutting-edge technology with a gentle touch, ensuring a pristine finish every time. No brushes here - just a safe and effective brush-free system. Simply put your vehicle in neutral, relax, and let Wash Me Car Wash elevate your car care routine.",
  },
  {
    label: "5 Self-Service Bays (Open 24 Hrs)",
    content:
      "Take control of your car care journey with Wash Me Car Wash's five self-service bays, available 24/7 for your convenience. Whether you're driving a car, motorcycle, or towing a trailer, our self-service bays cater to all your needs. Enjoy a bright and clean environment, equipped with user-friendly tools that make maintaining your vehicle a breeze. At Wash Me Car Wash, it's more than just self-service - it's a personalized experience designed for you.",
  },
];
const LogoImage: React.FC<LogoImageProps> = React.memo(
  ({ src, alt, className }) => (
    <Image
      src={src}
      alt={alt}
      width={100}
      height={75}
      className={className}
      loading="lazy"
    />
  )
);
LogoImage.displayName = "LogoImage";

const Facilities: React.FC = () => {
  const [isClient, setIsClient] = useState(!1);
  const [autoplayPlugin, setAutoplayPlugin] = useState<any>(null);
  useEffect(() => {
    setIsClient(!0);
    import("embla-carousel-autoplay").then((Autoplay) => {
      setAutoplayPlugin(
        Autoplay.default({ delay: 3000, stopOnInteraction: !1 })
      );
    });
  }, []);
  const memoizedCarouselContent = useMemo(
    () => (
      <DynamicCarouselContent>
        {" "}
        {FacilitiesImages.map((url, index) => (
          <DynamicCarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 p-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 object-contain h-full">
              {" "}
              <Image
                src={url}
                alt={`Facilities Image ${index + 1}`}
                width={400}
                height={300}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-center object-cover"
              />{" "}
            </div>{" "}
          </DynamicCarouselItem>
        ))}{" "}
      </DynamicCarouselContent>
    ),
    []
  );
  return (
    <div className="my-1 bg-primaryBlue-200 text-white px-4 w-full flex flex-col justify-between items-center sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-15">
      {" "}
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/4 flex flex-row md:flex-col justify-center md:justify-start gap-3 mb-6 md:mb-0">
          {" "}
          <LogoImage
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/logo11.png"
            alt="2023 Award of Washme Car wash"
            className="w-32 sm:w-40 md:w-32"
          />
          <LogoImage
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/logo22.png"
            alt="Best SouthWest Washington 2023"
            className="w-32 sm:w-40 md:w-32"
          />
        </div>{" "}
        <div className="md:w-2/3 text-center">
          {" "}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-6 md:mb-8">
            State-of-the-Art Car Wash Facilities
          </h1>{" "}
          <CustomTabs tabs={tabsData} />
        </div>{" "}
        <div className="md:w-1/4 flex flex-row md:flex-col justify-end items-end gap-3 mt-6 md:mt-0">
          {" "}
          <LogoImage
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/100.png"
            alt="100% Garented"
            className="w-32 sm:w-40 md:w-32"
          />{" "}
          <LogoImage
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/google.png"
            alt="Review Us On Google Image"
            className="w-32 sm:w-40 md:w-32"
          />{" "}
        </div>{" "}
      </div>{" "}
      <div>
        {" "}
        {isClient && autoplayPlugin && (
          <DynamicCarousel
            plugins={[autoplayPlugin]}
            className="text-black mt-12 sm:mt-16 lg:mt-20 w-full mx-auto"
          >
            {memoizedCarouselContent}{" "}
            <DynamicCarouselPrevious className="absolute -left-8 top-1/2" />{" "}
            <DynamicCarouselNext className="absolute -right-8 top-1/2" />{" "}
          </DynamicCarousel>
        )}{" "}
      </div>{" "}
    </div>
  );
};
Facilities.displayName = "Facilities";
export default React.memo(Facilities);
