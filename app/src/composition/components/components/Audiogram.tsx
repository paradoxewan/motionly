import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { getSrc } from "../../helpers/getSrc";
import { z } from "zod";
import { Color, JustifyContent } from "../../../inputs";
import { Component } from "..";
import { BsSoundwave } from "react-icons/bs";
import { useComponent } from "../../types";

export const AudiogramProps = z.object({
  src: z.string().url(),
  position: JustifyContent.optional(),
  gap: z.number().optional(),
  barWidth: z.number().min(0).optional(),
  color: Color.optional(),
  roundness: z.number().min(0).optional(),
  startFrom: z.number().min(0).optional(),
  smoothing: z.boolean().optional(),
  mirror: z.boolean().optional(),
  multiplier: z.number().min(0).optional(),
});
export type AudiogramProps = z.infer<typeof AudiogramProps>;

export const audiogram: Component<AudiogramProps> = {
  zod: AudiogramProps,
  Icon: BsSoundwave,
  hue: 100,
  inputs: {
    src: { text: { label: "Source" } },
    barWidth: { number: { label: "Bar Width" } },
    gap: { number: { label: "Gap" } },
    color: { color: { label: "Color" } },
    roundness: { number: { label: "Roundness" } },
    startFrom: { number: { label: "Start From" } },
    smoothing: { checkbox: { label: "Smoothing" } },
    mirror: { checkbox: { label: "Mirror" } },
    multiplier: { number: { label: "Multiplier" } },
  },
  examples: [
    {
      title: "Middle",
      image: "/logo.png",
      props: {
        props: {
          src: "",
          mirror: true,
          multiplier: 2,
          barWidth: 10,
          gap: 1,
          position: "center",
          smoothing: true,
          color: "#00FF00FF",
        },
      },
    },
  ],
  component: ({ src, barWidth = 10, color, gap, mirror, multiplier = 1, position, roundness, smoothing, startFrom, id }) => {
    const { width, height } = useComponent((s) => ({ width: s.width, height: s.height }), id)!;
    const background = color;
    const { fps } = useVideoConfig();
    const currentFrame = useCurrentFrame();
    let frame = startFrom ? currentFrame + startFrom * fps : currentFrame;
    if (frame < 0) frame = 0;
    if (!src) return null;

    const audioData = useAudioData(getSrc(src));
    if (!audioData) {
      return null;
    }
    const maxVisibleBars = Math.floor(width / ((gap || 0) + barWidth));
    const numberOfSamples = Math.pow(2, Math.ceil(Math.log(maxVisibleBars / (mirror ? 2 : 1)) / Math.log(2)));
    const visualization = numberOfSamples
      ? visualizeAudio({
          fps,
          frame,
          audioData,
          numberOfSamples,
          smoothing,
        })
      : [];
    const bars = mirror ? [...[...visualization].reverse(), ...visualization] : visualization;
    return (
      <div
        style={{
          display: "flex",
          alignItems: position,
          justifyContent: "center",
          gap,
          width,
          height,
        }}
      >
        {bars.map((v, i) => {
          return (
            <div
              key={i}
              style={{
                width: barWidth,
                height: height * v * multiplier,
                background,
                borderRadius: roundness,
              }}
            />
          );
        })}
      </div>
    );
  },
};
