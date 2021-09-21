import React, {FC} from 'react';

export type Props = {
  // className is required to apply style
  className?: string;
  text: string
}

export const Button: FC<Props> = ({text, className}) => {
  return <button className={className}>{text}</button>
}
