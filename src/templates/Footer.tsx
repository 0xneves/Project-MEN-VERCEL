import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../components/background/Background';
import { CenteredFooter } from '../components/footer/CenteredFooter';
import { Section } from '../components/layout/Section';

const Footer = () => (
  <Background color="bg-gray-100 dark:bg-gray-900">
    <Section>
      <CenteredFooter
        iconList={
          <>
            <Link href="https://twitter.com/nonfungible_men">
              <a className="px-2">
                <Image
                  src="/twitterlogo.png"
                  alt="Twitter link Logo"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://discord.gg/JpnDNsbf2B">
              <a className="px-3">
                <Image
                  src="/discordlogo.png"
                  alt="Discord link Logo"
                  width={23}
                  height={24}
                />
              </a>
            </Link>
          </>
        }
      >
        <li>
          <Link href="#home">
            <a className="font-senior text-sm dark:text-gray-200">Home</a>
          </Link>
        </li>
        {/* Must create About */}
        {/* <li>
          <Link href="/">
            <a className="font-senior text-sm dark:text-gray-200">About</a>
          </Link>
        </li> */}
        <li>
          <Link href="https://docs.nonfungible.men">
            <a className="font-senior text-sm dark:text-gray-200">Docs</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
