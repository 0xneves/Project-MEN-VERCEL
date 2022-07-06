import { useEffect, useState } from 'react';

// import { useMetaMask } from 'metamask-react';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { HeroOneDescription } from '../components/hero/HeroOneDescription';
import { BackgroundDetails } from '../components/layout/BackgroundDetails';
import { GroupSection } from '../components/layout/GroupSection';
import { Proposal } from '../components/layout/Proposal';
import { RoadMap } from '../components/layout/RoadMap';
import { Section } from '../components/layout/Section';
import { Traits } from '../components/layout/Traits';
import { Navbar } from '../components/navigation/Navbar';
// import { getMainContract } from '../utils/GetContracts';

const Hero = () => {
  const [activeColor, setActiveColor] = useState('');
  const [oposite, setOposite] = useState('');
  const [adjascent1, setAdjascent1] = useState('');
  const [adjascent2, setAdjascent2] = useState('');
  const [info, setInfo] = useState('hidden');
  // const { ethereum, status } = useMetaMask();

  // const mainContract = getMainContract(ethereum);
  // const [mining, setMining] = useState(false);

  useEffect(() => {
    setInterval(() => setInfo('hidden'), 10000);
  }, []);
  const submit = async () => {
    if (info === 'hidden') {
      setInfo('block');
    } else {
      setInfo('hidden');
    }

    // if (status === 'notConnected') {
    //   console.log(status);
    // } else {
    //   if (!mainContract) {
    //     console.error('Maincontract object is required to create a colletion');
    //     return;
    //   }
    //   setMining(true);
    //   try {
    //     const owner = await mainContract.owner();
    //     console.log('Create transaction started...', owner);
    //     // await owner.wait();
    //     // console.log(owner);
    //     // console.log(`Collection ${collectionName} created!`, createTxn.hash);
    //     // Router.push('/');
    //   } finally {
    //     setMining(false);
    //     console.log(mining);
    //   }
    // }
  };

  return (
    <Background color="bg-gray-100 dark:bg-gray-800">
      <Section>
        <Navbar />
      </Section>
      <GroupSection>
        <Section addExtras="pt-20 pb-32">
          <HeroOneButton
            setActiveColor={setActiveColor}
            setOposite={setOposite}
            setAdjascent1={setAdjascent1}
            setAdjascent2={setAdjascent2}
            balloonChat={info}
            button={
              <a className="pr-8" onClick={() => submit()}>
                <Button bit>MINT NOW!</Button>
              </a>
            }
          />
        </Section>
        <Section addExtras="pt-24 pb-32">
          <HeroOneDescription
            title="10,000"
            title2="unique NFTs"
            color={activeColor}
          />
        </Section>
      </GroupSection>
      <GroupSection>
        <BackgroundDetails
          color={activeColor}
          color2={oposite}
          color3={adjascent1}
          color4={adjascent2}
        />
      </GroupSection>
      <GroupSection>
        <Proposal
          title="Huh.. What is this place? Where am I?"
          description5="Hello, so glad you found us :D
          "
          description="$MEN is the first showcase of our technologies to the 
          crypto community. A joint force in favor of the same vision, brought you a NFT Collection, that has 
          utility attached, thus, intrinsic value.
          "
          description2="We are an 0xagon product, a group of enthusiasts and entrepreneur friends that wish to build for web3.
          "
          description3="$MEN is not just a NFT. It can be negotiated as a vanity item? Yes of course, but it also comes with a feel benefits: 
          Private discord chat, early communication with developers, feeless projects launched by 0xagon, shares/staking rewards from non-hodlers 
          accrued fees, NFTs giveaway and much more to come!
          "
          description4="Truth is.. We developed a bunch of cool ideas that are already prototyped, and are in the proccess of being documented. We are also
          creating strategic planning and fiting each launch in a sequence that will work in favor of the entire ecosystem.
          Amoung our products we have a compression algorithm that reduces costs of on-chain minting using dynamic SVGs, charity proxy for protocols,
          borrow/lending using NFT as collateral and much more.
          "
        />
      </GroupSection>
      <Traits />
      <GroupSection displayType="inline-blocks sm:mt-40">
        <RoadMap
          color={activeColor}
          season="Q1"
          title="Journey to the Future"
          description="
          What's something unique we can offer those who hold our nfts? 
          What does our community want from us and our project? 
          How could we expand and grow our nft project in the future?
          Those questions drove us around the infinity edges 
          of web3, fiercely seeking knowledge and people 
          to connect with. There is plenty of coding, 
          research, marketing, macro tendencies, use 
          cases and a lot of the unexpected."
        />
        <RoadMap
          color={activeColor}
          season="Q1"
          title="Vision"
          description="
          The DAO's ascension and the reinforcement of communities, the 
          bear market testing us all, and the ones with shared vision 
          uniting forces to fix previous issues and build a solid 
          ecosystem that will soon flourish. We are creating a whole 
          ecosystem of web3 solutions. Turning it into a set of useful 
          tools, providing a better future that will empower us all."
        />
        <RoadMap
          color={activeColor}
          season="Q1"
          title="NFT: Traits Creation"
          description="
          We created a concept of generic men using briefcases and 
          assigned different characteristics. There are more than 200 traits, 
          including 128 beards and hair. The total number of traits 
          won't be revealed any time soon, and some might never even
          see the light of day due to its rarity. But this is still boring, sounds 
          like any other project :("
        />
        <RoadMap
          color={oposite}
          season="Q2"
          title="| 01 >"
          description="
          To make things more interesting, we realized we needed more uniqueness,
          but we are not artists, we are coders.. So, we designed a quality extractor
          for the output data of a quantum computer, thus, owning our own true quantum number
          generator API. Unpredictable by any means, we used this technique  to sort each traits
          unique chance of happening, giving life to a full collection of Quantum NFT's"
        />
        <RoadMap
          color={oposite}
          season="Q2"
          title="NFT: Upload to IPFS"
          description="
          To register the DNA and the img URL we are going to use 
          the nft.storage protocol. They've been providing an excellent 
          pinning service on Filecoin, making the IPFS links forever 
          pinned to the Filecoin network. We'll also pin it in our 
          backup servers."
        />
        <RoadMap
          color={oposite}
          season="Q2"
          title="Contracts: ERC721, LazyMint, OpenSea"
          description="
          We need a standard ERC721 smart contract that will be used to 
          mint the NFTs. We need it to be secured against exploits, thus 
          its simplicity by following the official Ethereum EIPS. We 
          must make our NFTs negotiable in OpenSea and other marketplaces.
          By using the LazyMint technique to save resources, we ensure
          their uniqueness and sniper proof qualities."
        />
        <RoadMap
          color={oposite}
          season="Q2"
          title="Website: Filling the Canvas"
          description="
          The website must be reactive and have a user friendly interface, an introduction
          to the features and an edgy roadmap should be provided. It should act as a
          magnet for people that share the vision of our constantly growing community.
          It must contain documentation providing guidance, useful tools that welcome
          the newcomers of the community and, of course, night mode and 
          cool palettes."
        />
        <RoadMap
          color={oposite}
          season="Q2"
          title="Social Media: The Call to Adventure"
          description="
          We use the best practices to manage our discord server, setting bots to secure it 
          against malicious entities. We will develop a guideline for posting better content
          by creating a Twitter account and mastering their API. This will enable us to fetch
          other projects's tweets and merge the best rated ones to use as reference."
        />
        <RoadMap
          color={oposite}
          season="Q3"
          title="Launch Sequence"
          description="
          With all the above items completed, we will start the launch sequence. 
          It consists of a series of social media engagements,
          whitelists, collaborations, free mint and more events."
        />
        <RoadMap
          color={oposite}
          season="Q3"
          title="Warm Welcome or Dark Age"
          description="
          We are not looking for the iceberg hype of NFTs to knock at our door. Our research showed
          that in the near future, projects with no business plan, or partnerships, will cease to exist.
          Thus, we rather be a mid-long term software house, providing products, education and services.
          If you are looking to 'ape' in, like these hyped nft approaches, here won't be the case. We'll 
          provide actual useful resources for holders and slowly build our way into the market."
        />
        <RoadMap
          color={activeColor}
          season="2023"
          title="$HER"
          description="
          The $HER NFT. It will be an outstanding collection of 10,000 unique quantum NFTs, just as $MEN. 
          Although, the only way to acquire $HER is by having the corresponding $MEN. 
          One $MEN mints one $HER. 
          The launch of $HER token will double the community size of holders.
          It'll be up for the community and the invisible hands of the market to set a price."
        />
      </GroupSection>
    </Background>
  );
};

export { Hero };
