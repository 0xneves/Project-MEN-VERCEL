import {
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

type IHeroOneButtonProps = {
  button: ReactNode;
  setActiveColor: Dispatch<SetStateAction<string>>;
  setOposite: Dispatch<SetStateAction<string>>;
  setAdjascent1: Dispatch<SetStateAction<string>>;
  setAdjascent2: Dispatch<SetStateAction<string>>;
  balloonChat: string;
  // font?: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const randomIndex = (min: number, max: number) => {
    // min and max included
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    return index;
  };

  const timeToChange = 4000;

  const [backgroundIndex, setBackgroundIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [hairIndex, setHairIndex] = useState(1);
  const [eyeIndex, setEyeIndex] = useState(1);
  const [accIndex, setAccIndex] = useState(1);
  const [shirtIndex, setShirtIndex] = useState(1);
  const [suitIndex, setSuitIndex] = useState(1);
  const [suitcaseIndex, setSuitcaseIndex] = useState(1);
  const [shoesIndex, setShoesIndex] = useState(1);

  useEffect(() => {
    setInterval(() => setBackgroundIndex(randomIndex(1, 9)), timeToChange);
    setInterval(() => setBodyIndex(randomIndex(1, 3)), timeToChange);
    setInterval(() => setHairIndex(randomIndex(1, 22)), timeToChange);
    setInterval(() => setEyeIndex(randomIndex(1, 6)), timeToChange);
    setInterval(() => setAccIndex(randomIndex(1, 12)), timeToChange);
    setInterval(() => setShirtIndex(randomIndex(1, 4)), timeToChange);
    setInterval(() => setSuitIndex(randomIndex(1, 6)), timeToChange);
    setInterval(() => setSuitcaseIndex(randomIndex(1, 20)), timeToChange);
    setInterval(() => setShoesIndex(randomIndex(1, 4)), timeToChange);
  }, []);

  if (backgroundIndex === 1) {
    props.setActiveColor('#e17c8d');
    props.setOposite('#1E8372');
    props.setAdjascent1('#83A9B8');
    props.setAdjascent2('#E5EC82');
  }
  if (backgroundIndex === 2) {
    props.setActiveColor('#9eaf48');
    props.setOposite('#6150B7');
    props.setAdjascent1('#DD7F7F');
    props.setAdjascent2('#D4936A');
  }
  if (backgroundIndex === 3) {
    props.setActiveColor('#c174f3');
    props.setOposite('#3E8B0C');
    props.setAdjascent1('#B1FB70');
    props.setAdjascent2('#FFD971');
  }
  if (backgroundIndex === 4) {
    props.setActiveColor('#5ccb7c');
    props.setOposite('#A33483');
    props.setAdjascent1('#FFCA74');
    props.setAdjascent2('#C65AB1');
  }
  if (backgroundIndex === 5) {
    props.setActiveColor('#ee913d');
    props.setOposite('#116EC2');
    props.setAdjascent1('#423CA6');
    props.setAdjascent2('#5CBC13');
  }
  if (backgroundIndex === 6) {
    props.setActiveColor('#dd776b');
    props.setOposite('#66B6C1');
    props.setAdjascent1('#4C6C90');
    props.setAdjascent2('#DDD96B');
  }
  if (backgroundIndex === 7) {
    props.setActiveColor('#4bb9b6');
    props.setOposite('#B44649');
    props.setAdjascent1('#FFD967');
    props.setAdjascent2('#EA5F8E');
  }
  if (backgroundIndex === 8) {
    props.setActiveColor('#d0c95a');
    props.setOposite('#2F36A5');
    props.setAdjascent1('#D07BA2');
    props.setAdjascent2('#AA7139');
  }
  if (backgroundIndex === 9) {
    props.setActiveColor('#4c8da6');
    props.setOposite('#B37259');
    props.setAdjascent1('#FFED6F');
    props.setAdjascent2('#FF886F');
  }

  return (
    <>
      <div className="container-men mx-auto mobile">
        <div className={`absolute anim-surge ${props.balloonChat}`}>
          <img
            className="balloon pos"
            alt="balloon"
            src={`/traits/balloon.png`}
          />
          <div className="balloon-content pos font-senior text-xs py-4 pl-6 ref-tw">
            Mint unavailable. More on{' '}
            <a href="https://twitter.com/menbershipnft/">Twitter</a>
          </div>
        </div>
        <img
          className="background"
          alt="background"
          src={`/traits/background-${backgroundIndex}.png`}
        />
        <img
          className="menBody"
          alt="menBody"
          src={`/traits/body-${bodyIndex}.png`}
        />
        <img
          className="hair"
          alt="hair"
          src={`/traits/hair-${hairIndex}.png`}
        />
        <img className="eye" alt="eye" src={`/traits/eye-${eyeIndex}.png`} />
        <img className="acc" alt="acc" src={`/traits/acc-${accIndex}.png`} />
        {shirtIndex !== 0 && (
          <img
            className="shirt"
            alt="shirt"
            src={`/traits/shirt-${shirtIndex}.png`}
          />
        )}
        <img
          className="suit"
          alt="suit"
          src={`/traits/suit-${suitIndex}.png`}
        />
        <img
          className="suitcase"
          alt="suitcase"
          src={`/traits/suitcase-${suitcaseIndex}.png`}
        />
        <img
          className="shoes"
          alt="shoes"
          src={`/traits/shoes-${shoesIndex}.png`}
        />
        <img className="pirateMap" alt="shoes" src={`/Clue.svg`} />
      </div>
      <div className="btn">{props.button}</div>

      <style jsx>{`
        .anim-surge {
          animation: surge 0.5s ease-out;
        }
        .anim-surge-2 {
          animation: surge2 0.5s ease-out;
        }
        .ref-tw :global(a) {
          @apply underline;
        }
        @media screen and (min-width: 768px) {
          .pos {
            transform: translate(200px, -80px);
          }
          @keyframes surge {
            0% {
              transform: translate(-50%, 75%);
              opacity: 0;
            }
            10% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(0%, 0%);
            }
          }
        }
        @media screen and (max-width: 767px) {
          .mobile {
            transform: translate(-30px, 50px);
          }
          .pos {
            transform: translate(120px, -80px);
          }
          @keyframes surge {
            0% {
              transform: translate(0%, 75%);
              opacity: 0;
            }
            10% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(0%, 0%);
            }
          }
        }
        .balloon {
          width: 240px;
          height: 96px;
        }
        .balloon-content {
          width: 240px;
        }
        .container-men {
          position: relative;
          width: 300px;
          height: 300px;
        }
        img {
          position: absolute;
          width: 300px;
          height: 300px;
        }
        @keyframes moveXLeft {
          0% {
            transform: translateX(75%);
            opacity: 0;
          }
          10% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes moveXRight {
          0% {
            transform: translateX(-75%);
            opacity: 0;
          }
          10% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes moveYUp {
          0% {
            transform: translateY(75%);
            opacity: 0;
          }
          10% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes moveYDown {
          0% {
            transform: translateY(-75%);
            opacity: 0;
          }
          10% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes appear {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes spinSquare {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(360deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
          0% {
            opacity: 0;
            transform: skew(30deg, 10deg) translate(-30%, 50%) rotate(0deg);
          }
          10% {
            opacity: 1;
            transform: skew(30deg, 10deg) translate(-30%, 50%) rotate(80deg);
          }
          100% {
            opacity: 1;
            transform: skew(30deg, 10deg) translate(-30%, 50%) rotate(100deg);
          }
        }

        .background {
          z-index: 0;
          will-change: transform opacity;
          animation: spin 4s ease-out infinite;
        }
        .menBody {
          z-index: 1;
        }
        .shirt {
          z-index: 2;
          will-change: transform opacity;
          animation: moveXRight 4s ease-out infinite;
        }
        .shoes {
          z-index: 3;
          will-change: transform opacity;
          animation: moveYUp 4s ease-out infinite;
        }
        .suit {
          z-index: 4;
          will-change: transform opacity;
          animation: moveXLeft 4s ease-out infinite;
        }
        .hair {
          z-index: 5;
          will-change: transform opacity;
          animation: moveXRight 4s ease-out infinite;
        }
        .eye {
          z-index: 6;
          will-change: transform opacity;
          animation: appear 4s ease-out infinite;
        }
        .acc {
          z-index: 7;
          will-change: transform opacity;
          animation: moveYDown 4s ease-out infinite;
        }
        .suitcase {
          z-index: 8;
          will-change: transform opacity;
          animation: moveXRight 4s ease-out infinite;
        }
        .btn {
          position: relative;
          text-align: center;
          margin-top: 50px;
        }
        .pirateMap {
          z-index: 20;
        }
      `}</style>
    </>
  );
};

export { HeroOneButton };
