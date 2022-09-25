import {FC} from 'react';

type Props = {
  character: string
}

export const Key: FC<Props> = ({character}) => {
  return (
    <div>
      { character }
    </div>
  );
};

export default Key;

