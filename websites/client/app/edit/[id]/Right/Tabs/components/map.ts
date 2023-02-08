import { MapProps } from "@motionly/base";
import { IoIosMap } from "react-icons/io";
import { Component } from ".";

export const map: Component<MapProps> = {
  name: "Map",
  Icon: IoIosMap,
  hue: 270,
  inputs: [
    {
      prop: "src",
      type: "text",
    },
    {
      prop: "lat",
      type: "number",
    },
    {
      prop: "lng",
      type: "number",
    },
    {
      prop: "zoom",
      type: "number",
    },
    {
      prop: "stroke",
      type: "color",
    },
    {
      prop: "strokeWidth",
      type: "number",
      if: (comp) => !!comp.stroke,
    },
    {
      prop: "fill",
      type: "color",
    },
    {
      prop: "bg",
      type: "color",
    },
    {
      prop: "markerColor",
      type: "color",
    },
    {
      prop: "markerSize",
      type: "number",
      if: (comp) => !!comp.markerColor,
    },
  ],
};