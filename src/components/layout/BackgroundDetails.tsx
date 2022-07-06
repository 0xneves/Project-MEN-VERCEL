import { ReactNode } from 'react';

import Draggable from 'react-draggable';

type IBackgroundDetailsProps = {
  color: string;
  color2: string;
  color3: string;
  color4: string;
  children?: ReactNode;
};

const BackgroundDetails = (props: IBackgroundDetailsProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 xl:flex hidden">
      <div className="spine spine-h">
        <Draggable>
          <div className="triangle-left"></div>
        </Draggable>
        <Draggable>
          <div className="rotate">
            <div className="triangle-rotate"></div>
          </div>
        </Draggable>
        <Draggable>
          <div className="rotate2">
            <div className="triangle-rotate2"></div>
          </div>
        </Draggable>
        <Draggable>
          <div className="rotate3">
            <div className="triangle-rotate3"></div>
          </div>
        </Draggable>
        {props.children}
        <style jsx>
          {`
            @media screen and (min-width: 1280px) {
              .spine-h {
                margin-top: 1px;
              }
            }
            @media screen and (min-width: 1536px) {
              .spine-h {
                margin-top: 300px;
              }
            }
            .spine {
              z-index: 0;
              align-items: center;
              width: 1024px;
              shape-outside: polygon(0 0, 100% 50%, 0 100%);
              background-color: transparent;
            }
            .rotate {
              position: absolute;
              bottom: 0px;
              left: 230px;
              width: 100px;
              height: 100px;
              transform: translate(-600%, 12%) rotate(-30deg);
            }
            .triangle-rotate {
              position: relative;
              width: 0;
              height: 0;
              border-bottom: 100px solid #a6fbf5;
              border-left: 100px solid transparent;
              color: palevioletred;
            }
            .rotate2 {
              position: absolute;
              bottom: 0px;
              left: 330px;
              width: 100px;
              height: 100px;
            }
            .triangle-rotate2 {
              position: relative;
              width: 0;
              height: 0;
              border-bottom: 100px solid #cdaefb;
              border-right: 150px solid transparent;
            }

            .triangle-left {
              position: absolute;
              width: 0;
              height: 0;
              bottom: 50px;
              right: 100px;
              transform: translate(200px, 114px);
              border-top: 50px solid transparent;
              border-right: 100px solid #cfc3fb;
              border-bottom: 50px solid transparent;
              z-index: 50;
            }
            .rotate3 {
              position: absolute;
              bottom: 120px;
              right: 105px;
              width: 100px;
              height: 100px;
              transform: translate(-365%, 40%) rotate(-50deg);
              z-index: 50;
            }
            .triangle-rotate3 {
              position: relative;
              width: 0;
              height: 0;
              border-top: 50px solid transparent;
              border-left: 100px solid #cfc3fb;
              border-bottom: 50px solid transparent;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export { BackgroundDetails };
