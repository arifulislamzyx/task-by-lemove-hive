"use client";
import Image from "next/image";
import Link from "next/link";
import header1 from "../../../public/assets/header-1.png";
import header2 from "../../../public/assets/header-2.png";
import bgRight from "../../../public/assets/bg-right.png";
import titleBg from "../../../public/assets/header-text-bg.png";
import annotation from "../../../public/assets/annotation.png";
import star from "../../../public/assets/Star.png";
import bg from "../../../public/assets/header-2-bg.jpg";

export default function Header() {
  return (
    <div className="mx-auto relative w-full  py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] md:w-[490px] h-auto z-0"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[490px] h-auto z-0">
        <Image
          src={bgRight}
          alt="BG Right"
          className="w-full h-auto object-contain"
        />
      </div>

      <section className="container mx-auto px-5">
        <div className="relative z-10 ">
          <div className="w-3xs lg:w-3xl md:col-span-1">
            <div className="text-[#111d5e] mb-4 leading-tight">
              <div className="flex justify-end">
                <h1 className="text-5xl md:text-[140px] font-extrabold text-right z-1">
                  React
                </h1>
              </div>

              <div className="relative">
                <h1 className="text-5xl md:text-[140px] font-extrabold relative z-10 text-left">
                  Conference
                </h1>
                <Image
                  src={titleBg}
                  alt="bg"
                  width={500}
                  height={100}
                  className="absolute -top-4/5 left-4/5 z-0 pointer-events-none select-none"
                />
                <Image
                  src={annotation}
                  alt="annotation"
                  width={85}
                  height={82}
                  className="absolute -top-24 left-10 z-50 lg:-top-44 lg:left-80  lg:z-0 pointer-events-none select-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-center gap-[70px] md:justify-end">
            <Image
              src={header2}
              alt="Speaker"
              width={330}
              height={420}
              className="rounded-[20px] object-cover "
            />

            <div className="flex flex-col lg:flex-row md:justify-center gap-[70px] ">
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Lorem uis diam turpis quam id fermentum. In quis diam turpis
                  quam id fermentum.
                </p>
                <Link
                  href="/event"
                  className="inline-block bg-[#FFC93E] hover:bg-yellow-500 text-black text-center px-6 py-3 rounded-full font-medium text-[18px] transition w-[177px] h-[54px] lg:w-[293px] lg:h-[60px] mx-auto lg:mx-0"
                >
                  Buy Tickets ↗
                </Link>
              </div>
              <Image
                src={header1}
                alt="Attendees"
                width={490}
                height={428}
                className="rounded-[20px] object-cover z-1 -translate-y-[0%] md:relative md:-translate-y-[30%]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 z-10">
          <span className="rotate-90 inline-block tracking-widest">
            Scroll Down ↓
          </span>
        </div>

        <div className="absolute bottom-4/11 lg:bottom-40 right-1/20 lg:right-4/14 z-0 text-yellow-400 text-4xl">
          <Image src={star} alt="star" width={132} height={132} />
        </div>

        <div className="absolute bottom-10 left-8/12 lg:left-2/12 z-0 text-yellow-400 text-4xl">
          <Image src={bg} alt="star" width={196} height={190} />
        </div>
      </section>
    </div>
  );
}
