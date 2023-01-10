export const TextAlign = {
  left: "Left",
  center: "Center",
  right: "Right",
};

export const ObjectFit = {
  cover: "cover",
  contain: "contain",
  fill: "fill",
  none: "none",
};
export const TranscriptionAnimationTypes = {
  "current-word": "Current word",
  "previous-text": "Previous text",
};
export const AudiogramPosition = {
  start: "Start",
  end: "End",
  center: "Center",
};
export const GraphTypes = {
  line: "Line",
  bar: "Bar",
  pie: "Pie",
};
export const MockupTypes = {
  iPhone: "iPhone",
  chrome: "Chrome",
  macbook: "Macbook",
  iPad: "iPad",
  "apple-watch": "Apple Watch",
  "vs-code": "VS Code",
};
export const ProgressbarTypes = {
  spotify: "Spotify",
  line: "Line",
  circle: "Circle",
  square: "Square",
};

export const AnimationTypes = {
  rotate: { label: "Rotate", units: "deg" },
  rotateX: { label: "Rotate X", units: "deg" },
  rotateY: { label: "Rotate Y", units: "deg" },
  rotateZ: { label: "Rotate Z", units: "deg" },
  scale: { label: "Scale", units: undefined },
  scaleX: { label: "Scale X", units: undefined },
  scaleY: { label: "Scale Y", units: undefined },
  scaleZ: { label: "Scale Z", units: undefined },
  translate: { label: "Translate", units: "px" },
  translateX: { label: "Translate X", units: "px" },
  translateY: { label: "Translate Y", units: "px" },
  translateZ: { label: "Translate Z", units: "px" },
  skew: { label: "Skew", units: "deg" },
  skewX: { label: "Skew X", units: "deg" },
  skewY: { label: "Skew Y", units: "deg" },
  perspective: { label: "Perspective", units: "px" },
};
export interface TranscriptionWord {
  text: string;
  start: number;
  end: number;
}

// Actual types
export type TextStyle = {
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: number;
  textAlign?: keyof typeof TextAlign;
  bg?: string;
  color?: string;
  outlineColor?: string;
  outlineWidth?: number;
};

export type TranscriptionProps = {
  comp: "transcription";
  src: TranscriptionWord[];
  textStyle: TextStyle;
  scrollByPage?: boolean;
  animationType: keyof typeof TranscriptionAnimationTypes;
  animationStyle: TextStyle;
};

export type AudioProps = {
  comp: "audio";
  src: string;
  volume: number;
  startFrom: number;
};

export type AudiogramProps = {
  comp: "audiogram";
  src: string;
  position: keyof typeof AudiogramPosition;
  gap: number;
  barWidth: number;
  color?: string;
  roundness: number;
  startFrom?: number;
  smoothing?: boolean;
  mirror?: boolean;
  multiplier?: number;
};

export type DivProps = {
  comp: "div";
  bg?: string;
  children: ComponentProps[];
};

export type GifProps = {
  comp: "gif";
  src: string;
  objectFit: keyof typeof ObjectFit;
};

export type GraphProps = {
  comp: "graph";
  src: number[];
  color?: string;
  type: keyof typeof GraphTypes;
  max?: number;
  min?: number;
  animationStart?: number;
  animationDuration?: number;
  strokeWidth?: number;
  gap?: number;
  roundness?: number;
};
export type ImageProps = {
  comp: "image";
  src: string;
  objectFit: keyof typeof ObjectFit;
};

export type LottieProps = {
  comp: "lottie";
  src: string;
  backwards?: boolean;
  loop?: boolean;
  playbackRate?: number;
  bg?: string;
};

export type MapProps = {
  comp: "map";
  lat: number;
  lng: number;
  zoom: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  markerColor?: string;
  markerSize?: number;
  url?: string;
  bg?: string;
};

export type MockupProps = {
  comp: "mockup";
  children: ComponentProps[];
  type: keyof typeof MockupTypes;
};

export type PathProps = {
  comp: "path";
  path: string;
  strokeColor?: string;
  strokeWidth?: number;
  viewBoxX?: number;
  viewBoxY?: number;
  viewBoxHeight?: number;
  viewBoxWidth?: number;
  fillColor?: string;
  isRound?: boolean;
};

export type QRCodeProps = {
  comp: "qrcode";
  text: string;
  color?: string;
  bg?: string;
};

export type TextProps = {
  comp: "text";
  textStyle: TextStyle;
  text: string;
};

export type VideoProps = {
  comp: "video";
  src: string;
  objectFit: keyof typeof ObjectFit;
  startFrom?: number;
  muted?: boolean;
  volume?: number;
  offthread?: boolean;
};

export type ProgressbarProps = {
  comp: "progressbar";
  type: keyof typeof ProgressbarTypes;
  color?: string;
  bg?: string;
  barWidth?: number;
  topRight?: boolean;
};

export type TemplateType = {
  id?: string;
  width: number;
  height: number;
  duration: number;
  fps: number;
  name?: string;
  public?: boolean;
  description?: string;
  comps: ComponentProps[];
  isOwner?: boolean;
};

export type AnimationProps = {
  type: keyof typeof AnimationTypes;
  start?: number;
  end?: number;
  from?: number;
  to?: number;
  duration?: number;
  mass?: number;
  damping?: number;
  stiffness?: number;
  reverse?: boolean;
};

export type BaseProps = {
  id: string;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  borderRadius?: number;
  rotation?: number;
  from?: number;
  duration?: number;
  opacity?: number;
  animations?: AnimationProps[];
};

export type AllComponents =
  | TextProps
  | ImageProps
  | DivProps
  | VideoProps
  | AudioProps
  | AudiogramProps
  | LottieProps
  | TranscriptionProps
  | MockupProps
  | MapProps
  | GraphProps
  | QRCodeProps
  | ProgressbarProps
  | GifProps
  | PathProps;

export type ComponentProps = BaseProps & AllComponents;

// type TextStyle={fontSize?:number;fontFamily?:string;fontWeight?:number;lineHeight?:number;textAlign?:"left"|"center"|"right";bg?:string;color?:string;outlineColor?:string;outlineWidth?:number;};
// type TranscriptionProps={comp:"transcription";textStyle:TextStyle;scrollByPage?:boolean;animationType:"current-word"|"previous-text";animationStyle:TextStyle;};
// type AudioProps={comp:"audio";volume:number;startFrom:number;};
// type AudiogramProps={comp:"audiogram";position:"center"|"start"|"end";gap:number;barWidth:number;color?:string;roundness:number;startFrom?:number;smoothing?:boolean;mirror?:boolean;multiplier?:number;};
// type DivProps={comp:"div";bg?:string;};
// type GifProps={comp:"gif";objectFit:"cover"|"contain"|"fill"|"none";};
// type GraphProps={comp:"graph";color?:string;type:"line"|"bar"|"pie";max?:number;min?:number;animationStart?:number;animationDuration?:number;strokeWidth?:number;gap?:number;roundness?:number;};
// type ImageProps={comp:"image";objectFit:"cover"|"contain"|"fill"|"none";};
// type LottieProps={comp:"lottie";backwards?:boolean;loop?:boolean;playbackRate?:number;bg?:string;};
// type MapProps={comp:"map";lat:number;lng:number;zoom:number;fill?:string;stroke?:string;strokeWidth?:number;markerColor?:string;markerSize?:number;url?:string;bg?:string;};
// type MockupProps={comp:"mockup";type:"iPhone"|"iPad"|"chrome"|"macbook"|"apple-watch"|"vs-code";};
// type PathProps={comp:"path";path:string;strokeColor?:string;strokeWidth?:number;viewBoxX?:number;viewBoxY?:number;viewBoxHeight?:number;viewBoxWidth?:number;fillColor?:string;isRound?:boolean;};
// type QRCodeProps={comp:"qrcode";text:string;color?:string;bg?:string;};
// type TextProps={comp:"text";textStyle:TextStyle;text:string;};
// type VideoProps={comp:"video";objectFit:"cover"|"contain"|"fill"|"none";startFrom?:number;muted?:boolean;volume?:number;offthread?:boolean;};
// type ProgressbarProps={comp:"progressbar";type:"spotify"|"line"|"circle"|"square";color?:string;bg?:string;barWidth?:number;topRight?:boolean;};
// type TemplateType ={id?:string;width:number;height:number;duration:number;fps:number;name?:string;public?:boolean;description?:string;comps:ComponentProps[];isOwner?:boolean;};
// type AnimationProps={type:"rotate"|"rotateX"|"rotateY"|"rotateZ"|"scale"|"scaleX"|"scaleY"|"scaleZ"|"translate"|"translateX"|"translateY"|"translateZ"|"skew"|"skewX"|"skewY"|"perspective";start?:number;end?:number;from?:number;to?:number;duration?:number;mass?:number;damping?:number;stiffness?:number;reverse?:boolean;};
// type BaseProps={id:string;height?:number;width?:number;x?:number;y?:number;borderRadius?:number;rotation?:number;from?:number;duration?:number;opacity?:number;animations?:AnimationProps[];};
// type AllComponents=|TextProps|ImageProps|DivProps|VideoProps|AudioProps|AudiogramProps|LottieProps|TranscriptionProps|MockupProps|MapProps|GraphProps|QRCodeProps|ProgressbarProps|GifProps|PathProps;
// type ComponentProps=BaseProps&AllComponents;