import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) => {
  return (
    <div id="home" className={props.color}>
      {props.children}
      <style jsx>
        {`
          #home {
            transition: all 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export { Background };
