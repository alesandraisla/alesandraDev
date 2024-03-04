import { useEffect, useState } from "react";
import { FontSizeController, GlobalFontContainer } from "./ButtonFontSize.style";
import { ButtonFontSizeProps } from "./ButtonFontSize.type";

export function ButtonFontSize({children}: ButtonFontSizeProps) {
  const [ fontSize, setFontSize ] = useState<number>(16);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}px`
  }, [fontSize])

  const increment = () => {
    setFontSize((prevSize)=> prevSize + 1);
  }

  const decrease = () => {
    setFontSize((prevSize) => Math.max(prevSize - 1, 10))
  }

  return(
    <GlobalFontContainer fontSize={fontSize}>
      <FontSizeController>
        <button onClick={increment}>Aumentar tamanho fonte +</button>
        <button onClick={decrease}>Diminuir tamanho fonte -</button>
      </FontSizeController>
      {children}
    </GlobalFontContainer>
  )
}