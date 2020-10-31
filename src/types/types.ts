type EasingFunction = (t: number) => number;

enum EasingFunctions {
  easeIn,
  easeInOut
}

interface Transition {
  easingFunction: EasingFunction;
  duration: number;
  callback: () => void;
}

interface AnimationSequence {
  sequence: Transition[];
  callback: () => void;
}

interface TranscriptChunk {
  text: string;
  timestamps: [number, number][];
}

interface Vec2 {
  x: number;
  y: number;
}

type Style = {
  font: string;
  color: string;
  size: number;
}

interface AnimatedText {
  position: Vec2;
  scale: Vec2;
  rotation: number;
  style: Style;
  sequence: AnimationSequence;
  text: TranscriptChunk;
}

interface AnimatedImage {
  position: Vec2;
  scale: Vec2;
  rotation: number;
  style: Style;
  sequence: AnimationSequence;
  image: string; // url or filepath
}

interface AnimatedGroup {
  image: AnimatedImage;
  text: AnimatedText;
  sequence: AnimationSequence;
}

interface Renderer {
  groups: AnimatedGroup[];
  dimensions: Vec2;
}