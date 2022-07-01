import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  // description?: string;
  addExtras?: string;
  margin?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`overflow-x-hidden md:overflow-x-visible max-w-screen-lg mx-auto px-3 ${
      props.addExtras ? props.addExtras : ''
    }
  `}
  >
    {/* {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )} */}
    {props.children}
  </div>
);

export { Section };
