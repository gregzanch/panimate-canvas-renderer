# panimate-canvas-renderer

## Design Doc (DD)

## Objectives

- take in a series of images (from search algo)
- take in a transcript (from speech to text)
- take in a template as a string ("what makes you you")

- render the specific template with the transcript+images

## Procedure

- parse the input (images, transcript, template)

```json
{
  "position": {
    "x": 0.0,
    "y": 0.0
  },
  "transcript": "you're the best",
  "words": ["you're", "the", "best"],
  "timestamps": [
    [11.48, 11.73],
    [11.73, 11.84],
    [11.84, 12.36]
  ],
  "images": [
    {
      "description": "Feeling happy",
      "url": "http:d;f/b22e8909-c3f8-4767-9c4c-2d5712586e12.svg"
    }
  ],
  "timespan": [11.48, 12.36],
  "selection": 0,
  "template": "what makes you you"
}
```

- iterate over total frames (duration\*fps)
- for each frame, call draw();

## Implementation

### Classes and Structs

**EasingFunctions**

- f(t between 0 and 1) => number describing the animation progress
- easeIn
- easeInOut

**Transition**

- EasingFunction: EasingFunction
- Duration: number
- callbackOnComplete: function

**AnimationSequence**

- sequence: Array of Transitions
- callbackOnComplete: function

**TranscriptChunk**

- text: string
- timestamps: Array of [startTime: number, endTime: number]

**AnimatedText**

- text: TranscriptChunk
- position: {x: number, y: number}
- scale: {x: number, y: number}
- rotation: number
- style: {font, color, size}
- animationSequence: AnimationSequence

**AnimatedImage**

- dimensions: {w: number, h: number}
- position: {x: number, y: number}
- scale: {x: number, y: number}
- rotation: number
- url || filepath
- animationSequence: AnimationSequence

**AnimatedGroup**

- image: AnimatedImage
- text: AnimatedText
- animationSequence: AnimationSequence

**Renderer**

- groups: AnimatedGroups
- dimensions: {w: number, height: number}
