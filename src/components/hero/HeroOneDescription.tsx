import { ReactNode } from 'react';

import { useTheme } from 'next-themes';
import Image from 'next/image';

type IHeroOneDescriptionProps = {
  title: ReactNode;
  title2: ReactNode;
  // description: string;
  color: string;
};

const HeroOneDescription = (props: IHeroOneDescriptionProps) => {
  const { theme } = useTheme();
  return (
    <header className="text-center">
      <div className="leading-hero">
        {theme === 'dark' ? (
          <Image alt="" src="/men_logo_white.png" width={335} height={140} />
        ) : (
          <Image alt="" src="/men_logo_black.svg" width={335} height={140} />
        )}
      </div>
      <div className="title-properties">
        {props.title}
        <style jsx>
          {`
            .title-properties {
              @apply font-editundo mt-6 pl-2 whitespace-pre-line leading-hero;
              transition: all 1s ease-out;
              font-size: 8.75rem;
              color: ${props.color};
            }
          `}
        </style>
      </div>
      <div className="title2-properties">
        {props.title2}
        <style jsx>
          {`
            .title2-properties {
              @apply font-editundo mt-10 pl-1 text-6xl whitespace-pre-line leading-hero;
              transition: all 1s ease-out;
              color: ${props.color};
            }
          `}
        </style>
      </div>
      {/* <div className="robinho">
        {props.description}
        <style jsx>
          {`
            .robinho {
              @apply text-3xl mt-4 mb-16 font-edunline;
              color: ${props.color};
            }
          `}
        </style>
      </div> */}
    </header>
  );
};
export { HeroOneDescription };
