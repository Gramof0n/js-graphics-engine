import { WindowFactory } from "./classes/Window";

const main = () => {
  WindowFactory(
    document.body as HTMLBodyElement,
    window.visualViewport!.height,
    window.visualViewport!.width,
    "black"
  );
};

main();
