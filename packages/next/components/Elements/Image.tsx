/* eslint-disable @next/next/no-img-element */
"use client";
import { ImageType } from "@imageapi/types";
import { Img } from "remotion";

export const Image = ({ element }: { element: ImageType }) => {
  return (
    <Img
      src={element.src}
      draggable={false}
      alt=""
      style={{
        height: "100%",
        width: "100%",
        objectFit: element.objectFit,
        borderRadius: `${element.borderRadius || 0}px`,
      }}
    />
  );
};
