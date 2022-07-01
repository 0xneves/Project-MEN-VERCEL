import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) => {
  return (
    <div id="home" className={props.color}>
      {props.children}
    </div>
  );
};

export { Background };
