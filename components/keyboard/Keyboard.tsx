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
    return Math.random() * (characters.length - 0) + 0;
  }
  const [keyChar, setKeyChar] = useState(getRandomKeyNumber());
  console.log(keyChar);
  const keypress = ((e: React.KeyboardEvent<HTMLButtonElement>) => {
    console.log(e.key);
    setKeyChar(getRandomKeyNumber());
  });
  return (
    <div>
      <button onKeyPress={ keypress }>Button</button>
      {characters.map((character, index) => {
        return <Key key={index} character={character} />;
      })}
    </div>
  );
};

export default Keyboard;
