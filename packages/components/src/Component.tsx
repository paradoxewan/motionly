import { Div } from "./components/Div";
import { Text } from "./components/Text";
import { Image } from "./components/Image";
import { Sequence, useVideoConfig } from "remotion";
import { Audio } from "./components/Audio";
import { Audiogram } from "./components/Audiogram";
import { Graph } from "./components/Graph";
import { Map } from "./components/Map";
import { Mockup } from "./components/Mockup";
import { Progressbar } from "./components/Progressbar";
import { QRCode } from "./components/QRCode";
import { Video } from "./components/Video";
import { Transcription } from "./components/Transcription";
import { Lottie } from "./components/Lottie";
import { Gif } from "./components/Gif";
import { Path } from "./components/Path";
import { useSelected } from "./SelectedContext";
import { ComponentProps } from "@asius/base";
import { useAnimation } from "./useAnimations";
import { animationProps } from "@asius/base";
import { getDuration, getFrom } from "@asius/base";
import { Shape } from "./components/Shape";
import { useRef } from "react";
import { MotionBlur } from "./MotionBlur";
import { Confetti } from "./components/Confetti";

export const Component = (comp: ComponentProps) => {
  const { fps, durationInFrames } = useVideoConfig();
  const from = Math.floor(getFrom(durationInFrames, (comp.from || 0) * fps));
  const duration = Math.floor(
    getDuration(
      durationInFrames,
      (comp.from || 0) * fps,
      (comp.duration || 0) * fps
    )
  );
  return (
    <MotionBlur props={comp.motionBlur}>
      <Sequence from={from} durationInFrames={duration} layout="none">
        <InsideSequence {...comp} />
      </Sequence>
    </MotionBlur>
  );
};

const InsideSequence = ({
  id,
  borderRadius,
  animations = [],
  height: inputHeight,
  opacity,
  rotation,
  width: inputWidth,
  x,
  y,
  ...comp
}: ComponentProps) => {
  const { setSelected, divRef, selected } = useSelected();
  const animation = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const width = inputWidth || ref.current?.offsetWidth || 0;
  const height = inputHeight || ref.current?.offsetHeight || 0;

  const transformAnimations = animations
    .map((anim) => {
      const { units } = animationProps[anim.prop];
      return `${anim.prop}(${animation(anim)}${units || ""})`;
    })
    .join(" ");
  return (
    <div
      ref={(e) => {
        if (ref) ref.current = e;
        if (divRef && selected === id) divRef.current = e;
      }}
      onClick={(e) => {
        setSelected(id);
        e.stopPropagation();
      }}
      style={{
        opacity:
          (opacity || 1) *
          animations
            .filter((a) => a.prop === "opacity")
            .reduce((acc, a) => acc * animation(a), 1),
        borderRadius:
          (borderRadius || 0) +
          animations
            .filter((a) => a.prop === "borderRadius")
            .reduce((acc, a) => acc + animation(a), 1),
        cursor: "pointer",
        display: "flex",
        overflow: "hidden",
        width: width || "100%",
        height: height || "100%",
        position: "absolute",
        top: y,
        left: x,
        userSelect: "none",
        transform: `rotate(${rotation || 0}deg) ${transformAnimations}`, // For some reason, this messes up x and y
      }}
    >
      {comp.comp === "div" && <Div {...comp} />}
      {comp.comp === "image" && <Image {...comp} />}
      {comp.comp === "text" && <Text {...comp} />}
      {comp.comp === "audio" && <Audio {...comp} />}
      {comp.comp === "audiogram" && (
        <Audiogram {...comp} width={width} height={height} />
      )}
      {comp.comp === "graph" && (
        <Graph {...comp} width={width} height={height} />
      )}
      {comp.comp === "map" && <Map {...comp} />}
      {comp.comp === "mockup" && <Mockup {...comp} />}
      {comp.comp === "progressbar" && (
        <Progressbar {...comp} width={width} height={height} />
      )}
      {comp.comp === "qrcode" && <QRCode {...comp} />}
      {comp.comp === "video" && <Video {...comp} />}
      {comp.comp === "transcription" && <Transcription {...comp} />}
      {comp.comp === "lottie" && <Lottie {...comp} />}
      {comp.comp === "gif" && <Gif {...comp} />}
      {comp.comp === "path" && <Path {...comp} />}
      {comp.comp === "confetti" && <Confetti {...comp} />}
      {comp.comp === "shape" && (
        <Shape {...comp} width={width} height={height} />
      )}
    </div>
  );
};
