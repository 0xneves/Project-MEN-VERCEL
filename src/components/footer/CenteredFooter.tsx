import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => {
  return (
    <div className="text-center mx-auto pt-2">
      <nav>
        <ul className="navbar flex flex-row justify-center font-medium text-xl text-gray-800">
          {props.children}
        </ul>
      </nav>

      <div className="mt-4 flex justify-center">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>

      <div className="mt-4 pb-1 text-sm active">
        <FooterCopyright />
      </div>

      <style jsx>
        {`
          .navbar :global(li) {
            @apply mx-4;
          }

          .active {
            transform: translate(1px);
          }
        `}
      </style>
    </div>
  );
};
export { CenteredFooter };
