import React from "react";
import { Composition, Folder } from "remotion";
import { examples } from "./examples";
import { Composition as Comp } from "@motionly/components";
import { insider } from "./insider";

export const Root: React.FC = () => {
  return (
    <>
      <Folder name="Examples">
        {Object.entries(examples).map(([id, e]) => (
          <Composition
            key={id}
            component={Comp}
            durationInFrames={e.fps * e.duration}
            fps={e.fps}
            id={id}
            width={e.width}
            height={e.height}
            defaultProps={{
              bg: e.bg,
              components: e.components,
              childIds: e.childIds,
              isSequence: e.isSequence,
            }}
          />
        ))}
      </Folder>
      <Folder name="Insider">
        {Object.entries(insider).map(([id, { inputs, template }]) => {
          const temp = template(inputs);
          return (
            <Composition
              key={id}
              component={Comp}
              durationInFrames={temp.fps * temp.duration}
              fps={temp.fps}
              id={id}
              width={temp.width}
              height={temp.height}
              defaultProps={{
                components: temp.components,
                childIds: temp.childIds,
                isSequence: temp.isSequence,
                bg: temp.bg,
              }}
            />
          );
        })}
      </Folder>
    </>
  );
};
