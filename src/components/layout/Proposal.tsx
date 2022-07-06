import { ReactNode, useState } from 'react';

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
  const [hiddenStatus, setHiddenStatus] = useState(true);
  return (
    <div className="max-w-screen-lg mx-auto px-6 sm:mt-96 md:mt-32 mb-16 md:mb-36">
      <div className="font-editundo spine-h text-black-200 dark:text-gray-200 text-4xl">
        {props.title}
        <div className="mt-3 text-xl text-justify">{props.description5}</div>
        <div
          className={`mt-3 text-xl text-justify ${
            hiddenStatus ? 'border-bott' : 'border-bott-none'
          }`}
        >
          {props.description}
        </div>
        <div
          className={`mt-3 text-xl text-justify ${
            hiddenStatus ? 'hidden' : 'visible'
          }
        `}
        >
          {props.description2}
        </div>
        <div
          className={`mt-3 text-xl text-justify ${
            hiddenStatus ? 'hidden' : 'visible'
          }
        `}
        >
          {props.description3}
        </div>
        <div
          className={`test mt-3 text-xl text-justify ${
            hiddenStatus ? 'hidden' : 'visible'
          }
        `}
        >
          {props.description4}
        </div>
        <a onClick={() => setHiddenStatus(!hiddenStatus)}>
          <div className="flex justify-end">
            ...Read {`${hiddenStatus ? 'more' : 'less'}`}
          </div>
        </a>
      </div>
      {props.children}
      <style jsx>
        {`
          .border-bott {
            border-bottom: rgb(207 195 251);
            border-bottom-style: dotted;
          }
          .border-bott-none {
            border-bottom: rgb(207 195 251 / 26%);
            border-bottom-style: none;
          }
          @media screen and (max-width: 1280px) {
            .spine-h {
              margin-top: 100px;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Proposal };
