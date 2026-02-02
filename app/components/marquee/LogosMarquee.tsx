"use client";

import { FC, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import { twJoin, twMerge } from "tailwind-merge";
import RandomCorporationLogo from "@/public/svg/RandomCorporation.svg"

import RandomEmpriseLogo from "@/public/svg/RandomEmprise.svg"

import TakeCarLogo from "@/public/svg/TakeCar.svg"

import WithFoodLogo from "@/public/svg/withFood.svg"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  isReversed?: boolean;
  className?: string;
};

const TECHNOLOGY_ICONS: StaticImageData[] = [
 RandomCorporationLogo, RandomEmpriseLogo, TakeCarLogo, WithFoodLogo
];

const ELEMENTS = [...TECHNOLOGY_ICONS, ...TECHNOLOGY_ICONS];

const LogoMarquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });

        timeline.current = gsap
          .timeline({
            defaults: {
              ease: "none",
              repeat: -1,
            },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, {
            xPercent: 0,
          });
      };

      setupInfiniteMarqueeTimeline();
    },
    {
      dependencies: [isReversed],
    }
  );

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const isLast = index === ELEMENTS.length - 1;

          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
              style={{
                height: src.height,
                width: src.width,
              }}
            >
              <Image
                src={src}
                alt="technologies icon"
                height={100}
                width={140}
                className="object-contain h-25 w-35"
              />
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "max-w-full select-none overflow-hidden",
        className
      )}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default LogoMarquee;
