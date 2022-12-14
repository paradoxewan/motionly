"use client";

import { useCallback, useEffect, useState } from "react";
import { RightPanel } from "./RightPanel";
import { BottomPanel } from "./LeftPanel";
import { Middle } from "./Middle";
import { useShiftKey } from "../../../hooks/useShiftKey";
import { Player } from "../../../components/Player";
import { CompProps, TemplateType } from "@asius/types";
import { updateTemplate } from "@asius/sdk";

export default function Edit({ template: startTemplate }: { template: TemplateType }) {
  const [template, setTemplate] = useState<TemplateType>(startTemplate);
  const [selected, setSelected] = useState("");
  const [scale, setScale] = useState(0.4);
  const lockAspectRatio = useShiftKey();

  const setComp = (element: CompProps) => {
    const get = (comps: CompProps[]) => {
      return comps.map((comp) => {
        if (comp.id === element.id) {
          comp = element;
        }
        if (comp.type === "div" && comp.children) {
          comp.children = get(comp.children);
        }
        return comp;
      });
    };
    const newComps = get(template.comps);
    setTemplate((t) => ({ ...t, comps: newComps }));
  };

  const find = (comps: CompProps[]): CompProps | null => {
    let selectedComp = comps.find((comp) => comp.id === selected) || null;
    if (selectedComp) return selectedComp;
    comps.forEach((comp) => (comp.type === "div" ? (selectedComp = find(comp.children)) : null));
    return selectedComp;
  };
  const selectedComp = find(template.comps);

  const update = useCallback(async () => {
    const updatedTemplate = await updateTemplate({ id: template.id || "", template });
    if (updatedTemplate) setTemplate(updatedTemplate);
  }, [template]);

  useEffect(() => {
    const interval = setInterval(() => update(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [update]);

  return (
    <div className="h-screen">
      <div className=" w-full bg-gray-400 grid grid-cols-5 h-[70%]">
        <Middle height={template.height} width={template.width} scale={scale} setScale={setScale}>
          <Player
            template={template}
            edit={{ lockAspectRatio, scale, select: setSelected, setComp, selected }}
          />
        </Middle>
        <RightPanel
          comp={selectedComp}
          setComp={setComp}
          template={template}
          setTemplate={setTemplate}
        />
      </div>
      <div className="bg-blue-50 h-[30%] w-full"></div>
      <BottomPanel
        comps={template.comps}
        setSelected={setSelected}
        selected={selected}
        setComps={(comps: CompProps[]) => setTemplate((t) => ({ ...t, comps }))}
      />
    </div>
  );
}
