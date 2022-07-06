import { ReactNode } from 'react';

type IRoadMapProps = {
  color: string;
  season: string;
  title: string;
  description: string;
  children?: ReactNode;
};

const RoadMap = (props: IRoadMapProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-3 flex pb-28">
      <div className="spine items-start md:items-center flex-col md:flex-row">
        <div className="season card-season-control">{props.season}</div>
        <div className="card pl-0 md:pl-18 card-border-control">
          <div className="card-title">
            <text className="dark:text-gray-200">{props.title}</text>
          </div>
          <div className="card-description text-justify md:text-left pt-4 md:pt-0">
            <text className="dark:text-gray-200">{props.description}</text>
          </div>
        </div>
      </div>
      {props.children}
      <style jsx>
        {`
          .spine {
            display: flex;
            height: 100%;
            background-color: transparent;
          }
          @media screen and (min-width: 768px) {
            .card-season-control {
              border-right: solid 10px;
              padding-right: 75px;
            }
            .card-border-control {
              border-left: solid 10px;
              padding-left: 100px;
            }
          }
          @media screen and (max-width: 767px) {
            .card-season-control {
              border-bottom: solid 10px;
            }
            .card-border-control {
              border-top: solid 10px;
            }
          }

          .season {
            @apply max-w-screen-lg font-editundo text-9xl;
            display: flex;
            align-items: center;
            height: 100%;
            border-color: ${props.color};
            color: ${props.color};
            transition: all 4s ease-out;
          }
          .card {
            @apply max-w-screen-lg;
            position: relative;
            display: inline-block;
            align-items: center;
            background-color: transparent;
            border-color: ${props.color};
            transition: all 4s ease-out;
          }
          .card-title {
            @apply font-editundo text-3xl;
            color: black;
            position: relative;
          }
          .card-description {
            @apply font-editundo text-xl;
            color: black;
            line-break: auto;
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export { RoadMap };
