import {FC} from 'react';

export type Character =
  | '!'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '*'
  | '('
  | ')'
  | '_'
  | '+'
  | '|'
  | '~'
  | '{'
  | '}'
  | '['
  | ']'
  | ';'
  | ':'
  | "'"
  | '"'
  | '/'
  | '?'
  | '.'
  | '>'
  | ','
  | '<'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0';

export type Props = {
  character: Character;
};

export const Key: FC<Props> = ({character}) => {
  return <div className='container'>{character}</div>;
};

export default Key;
