import { DivProps } from "@asius/types";
import { Component } from "../Component";

export const Div = ({ comp }: { comp: DivProps }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: comp.background,
      }}
    >
      {comp.children.map((child, index) => (
        <Component key={index} comp={child} />
      ))}
    </div>
  );
};