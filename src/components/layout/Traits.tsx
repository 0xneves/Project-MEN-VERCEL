import { ReactNode } from "react";

type ITraitsProps = {
  children?: ReactNode;
};

const Traits = (props: ITraitsProps) => {
  const traits = [
    'armaniocean',
    'dreamingawake',
    'fullhair',
    'nerdglasses',
    'sunglasses',
    'shoesjordan',
    'suitcasebrown',
    'suitcasepinky',
  ];

  return (
    <div className="spine flex justify-evenly flex-row flex-wrap md:flex-no-wrap max-w-full align-items mx-auto">
      {traits.map((trait, key) => {
        return (
          <div key={key} className="trait-block flex-wrap mb-8">
            <img
              className="trait-img"
              alt={`${trait}`}
              src={`/showcase/${trait}.png`}
            />
          </div>
        );
      })}
      {props.children}
      <style jsx>
        {`
          .spine {
            margin-bottom: 100px;
          }
          .trait-block {
            flex-shrink: 0;
            margin-left: 16px;
            margin-right: 16px;
            display: flex;
            height: 128px;
            width: 128px;
            background-color: #a6fbf5;
            box-shadow: 10px -10px #cfc3fb;
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
        `}
      </style>
    </div>
  );
};

export { Traits };
