import { useState } from "react";
import { Container, DropdownButton, DropdownItem, DropdownMenu } from "./DropdownStyles";

export function CustomDropdown({
  bgColor,
  fontColor,
  hoverColor,
  listOptions,
  textColor,
  hoverBgColor,
  hoverTextColor,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Selecione uma opção");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <DropdownButton
        onClick={toggleDropdown}
        bgColor={bgColor}
        fontColor={fontColor}
        hoverColor={hoverColor}
      >
        {selectedItem}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {listOptions.map((option, index) => {
            return (
              <DropdownItem
                key={index}
                bgColor={bgColor}
                textColor={textColor}
                hoverBgColor={hoverBgColor}
                hoverTextColor={hoverTextColor}
                onClick={() => handleItemClick(option)}
              >
                {option}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      )}
    </Container>
  );
}