export const WindowFactory = (
  body: HTMLBodyElement,
  height: number,
  width: number,
  bgColor?: string | undefined
) => {
  return new Window(body, height, width, bgColor);
};

class Window {
  constructor(
    body: HTMLBodyElement,
    height: number,
    width: number,
    bgColor: string | undefined
  ) {
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    canvas.style.backgroundColor = bgColor ?? "white";
    body.querySelector<HTMLDivElement>("#app")!.appendChild(canvas);
  }
}
