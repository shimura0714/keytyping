import { FC, useState } from "react";
import { Key, Character } from "./Key";

const characters: Character[] = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "|",
  "~",
  "{",
  "}",
  "[",
  "]",
  ";",
  ":",
  "'",
  '"',
  "/",
  "?",
  ".",
  ">",
  ",",
  "<",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

export const Keyboard: FC = () => {
  const getRandomKeyNumber = () => {
    const random = Math.floor(Math.random() * (characters.length - 0) + 0);
    return characters[random];
  };
  const [keyChar, setKeyChar] = useState(getRandomKeyNumber());
  const keypress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    setKeyChar(getRandomKeyNumber());
  };
  return (
    <>
      <div>
        <button onKeyPress={keypress}>Button</button>
      </div>
      <Key character={keyChar} />
    </>
  );
};

export default Keyboard;
