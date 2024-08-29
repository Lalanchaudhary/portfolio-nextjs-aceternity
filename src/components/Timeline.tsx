import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import img1 from "@/app/assets/image1.jpg";
import img2 from "@/app/assets/image2.jpg";

export function Timelinee() {
  const data = [
    {
      title: "Day-1",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[3rem] font-bold">Igniting the Journey</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            An Unforgettable Start with Inspiration, Industry Insights, Entrepreneurial Wisdom, and a Dash of Laughter.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img2}
              alt="startup template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={img1}
              alt="startup template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day-2",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[3rem] font-bold">Continuing the Journey</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            Delving Deeper into Innovation, Collaboration, and Growth Strategies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day-3",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[3rem] font-bold">Reaching New Heights</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
            Culminating in Achievements, Reflections, and Setting Future Aspirations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
