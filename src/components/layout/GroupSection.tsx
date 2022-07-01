import { ReactNode } from 'react';

type ISectionProps = {
  displayType?: string;
  children: ReactNode;
  className?: string;
};
const GroupSection = (props: ISectionProps) => (
  <div
    className={`${
      props.displayType ? props.displayType : 'lg:flex'
    } max-w-screen-lg mx-auto`}
  >
    {props.children}
  </div>
);

export { GroupSection };
