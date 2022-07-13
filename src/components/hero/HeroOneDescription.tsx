import { ReactNode } from 'react';

import { useTheme } from 'next-themes';
import Image from 'next/image';

type IHeroOneDescriptionProps = {
  title: ReactNode;
  title2: ReactNode;
  title3: ReactNode;
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
      <div className="title properties">{props.title}</div>
      <div className="title2 properties">{props.title2}</div>
      <div className="title3 properties">{props.title3}</div>
      <style jsx>
        {`
          .properties {
            @apply font-editundo whitespace-pre-line leading-hero;
            transition: all 1s ease-out;
            color: ${props.color};
          }

          .title {
            @apply mt-6 pl-2;
            font-size: 8.75rem;
          }

          .title2 {
            @apply mt-10 pl-1;
            font-size: 7.2rem;
          }

          .title3 {
            @apply mt-3 pl-1;
            font-size: 3.7rem;
          }
        `}
      </style>
    </header>
  );
};
export { HeroOneDescription };
