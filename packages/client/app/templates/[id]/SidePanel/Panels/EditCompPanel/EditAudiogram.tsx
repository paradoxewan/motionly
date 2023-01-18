import { AudiogramProps, AudiogramPosition } from "@asius/components";
import {
  BooleanInput,
  ColorInput,
  NumberInput,
  SelectInput,
} from "../../../../../../components/inputs";
import { Media } from "../../../../../../components/Media";
import { EditSection } from "./EditSection";
import { SetComp } from "./index";

export const EditAudiogram = ({
  comp,
  setComp,
}: {
  comp: AudiogramProps;
  setComp: SetComp;
}) => {
  return (
    <EditSection title="Audiogram">
      <Media
        value={comp.src}
        onChange={(src) => setComp({ ...comp, src })}
        type="video"
      />
      <SelectInput
        label="Position"
        value={comp.position}
        onChange={(position) =>
          setComp({
            ...comp,
            position: position as keyof typeof AudiogramPosition,
          })
        }
        options={Object.entries(AudiogramPosition).map(([value, label]) => ({
          value,
          label,
        }))}
      />
      <NumberInput
        label="Bar"
        value={comp.barWidth}
        onChange={(barWidth) => setComp({ ...comp, barWidth })}
      />
      <NumberInput
        label="Gap"
        value={comp.gap}
        onChange={(gap) => setComp({ ...comp, gap })}
      />
      <NumberInput
        label="Round"
        value={comp.roundness}
        onChange={(roundness) => setComp({ ...comp, roundness })}
      />
      <NumberInput
        label="StartFrom"
        value={comp.startFrom}
        onChange={(startFrom) => setComp({ ...comp, startFrom })}
      />
      <NumberInput
        label="Multiplier"
        value={comp.multiplier}
        onChange={(multiplier) => setComp({ ...comp, multiplier })}
      />
      <BooleanInput
        label="Smoothing"
        value={comp.smoothing}
        onChange={(smoothing) => setComp({ ...comp, smoothing })}
      />
      <BooleanInput
        label="Mirror"
        value={comp.mirror}
        onChange={(mirror) => setComp({ ...comp, mirror })}
      />
      <ColorInput
        label="Color"
        value={comp.color}
        onChange={(color) => setComp({ ...comp, color })}
      />
    </EditSection>
  );
};