declare module 'canvas-nest.js' {
  interface configType {
    color?: string;

    count?: number;
  

    zIndex?: number;

    opacity?: number;
  }

  class CanvasNest {
    constructor(element: Element, config?: configType)
    destroy(): void;
  }

  export default CanvasNest;
}