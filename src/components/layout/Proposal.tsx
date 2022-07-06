import { ReactNode } from 'react';

type IProposalProps = {
  title: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  children?: ReactNode;
};

const Proposal = (props: IProposalProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 sm:mt-96 md:mt-32 mb-16 md:mb-36">
      <div className="font-editundo spine-h text-black-200 dark:text-gray-200 text-4xl">
        {props.title}
        <div className="mt-3 text-xl">{props.description5}</div>
        <div className="mt-3 text-xl">{props.description}</div>
        <div className="mt-3 text-xl">{props.description2}</div>
        <div className="mt-3 text-xl">{props.description3}</div>
        <div className="mt-3 text-xl">{props.description4}</div>
      </div>
      {props.children}
      <style jsx>
        {`
          @media screen and (min-height: 1080px) {
            .spine-h {
              margin-top: 200px;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Proposal };
