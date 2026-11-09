"use client";

import { useRef } from "react";
import Image from "next/image";
import Icon from "./Icon";

/** Floor plan image that opens full-size in a scrollable lightbox for close reading. */
export default function FloorPlanViewer({ src, width, height, alt }: { src: string; width: number; height: number; alt: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-copper-100 bg-cream p-3 sm:p-6"
        aria-label="Open the typical floor plan full size"
      >
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
        <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-maroon-950/85 px-4 py-2 text-xs font-semibold text-cream backdrop-blur transition group-hover:bg-copper-500">
          <Icon name="expand" /> Zoom plan
        </span>
      </button>

      <dialog
        ref={ref}
        aria-label="Typical floor plan"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-none overflow-hidden rounded-3xl bg-cream p-0"
      >
        <div className="relative h-full overflow-auto">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close floor plan"
            className="sticky left-full top-3 z-10 mr-3 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-maroon-950 text-cream shadow-lg"
          >
            <Icon name="close" />
          </button>
          {/* Wider than the viewport on phones so the room labels stay legible; pan to explore. */}
          <Image src={src} alt={alt} width={width} height={height} sizes="2400px" className="-mt-10 h-auto w-[2000px] max-w-none lg:w-full" />
        </div>
      </dialog>
    </>
  );
}
