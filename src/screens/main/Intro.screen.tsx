import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Intro: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoEnd = () => {
        navigate("/main");
      };

      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
    // 빈 return 문을 추가하여 모든 코드 경로에서 반환을 제거합니다.
    return undefined;
  }, [navigate]);

  return (
    <Wrapper>
      <IntroVideo>
        <video ref={videoRef} autoPlay muted>
          <source
            src={`${process.env.PUBLIC_URL}/img/intro/Intro.mp4`}
            type="video/mp4"
          />
        </video>
      </IntroVideo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const IntroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 5%;
`;

//Intro 직접 만든 버전

// import * as React from "react";
// import { motion, useAnimation } from "framer-motion";
// import styled from "styled-components";

// const getRandomTransformOrigin = () => {
//   const value = (16 + 40 * Math.random()) / 100;
//   const value2 = (15 + 36 * Math.random()) / 100;
//   return {
//     originX: value,
//     originY: value2,
//   };
// };

// const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

// const randomDuration = () => Math.random() * 0.07 + 0.23;

// const variants = {
//   start: () => ({
//     rotate: 1 % 2 === 0 ? [-1, 10.3, 0] : [1, -10.4, 0],
//     transition: {
//       delay: getRandomDelay(),
//       repeat: Infinity,
//       duration: randomDuration(),
//     },
//   }),
//   reset: {
//     rotate: 0,
//   },
// };

// const Container = styled.div`
//   background-image: url("./img/intro/background.svg");
//   background-size: cover;
//   width: 100vw; //실행중인 스크린 크기에 맞춰 상대적 크기 반환
//   height: 100vh;
//   background-repeat: no-repeat;
// `;

// const Logo = styled.div`
//   background-image: url("./img/intro/logo.svg");
//   background-repeat: no-repeat;
//   position: absolute;
//   top: 5%;
//   left: 2%;
//   width: 214px;
//   height: 40px;
// `;

// const Computer = styled.div`
//   background-image: url("./img/intro/컴퓨터.svg");
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 988px;
//   height: 556px;
// `;

// const Shopping = styled.div`
//   background-image: url("./img/intro/shoppingIcon.svg");
//   position: absolute;
//   top: 12%;
//   left: 21%;
//   width: 109px;
//   height: 109px;
// `;

// const Heart = styled.div`
//   background-image: url("./img/intro/heartIcon.svg");
//   position: absolute;
//   top: 40%;
//   left: 10%;
//   width: 109px;
//   height: 109px;
// `;

// const Food = styled.div`
//   background-image: url("./img/intro/foodIcon.svg");
//   position: absolute;
//   top: 73%;
//   left: 18%;
//   width: 103px;
//   height: 103px;
// `;

// const Coffee = styled.div`
//   background-image: url("./img/intro/coffeeIcon.svg");
//   position: absolute;
//   top: 6%;
//   left: 70%;
//   width: 109px;
//   height: 109px;
// `;

// const Percent = styled.div`
//   background-image: url("./img/intro/percentIcon.svg");
//   position: absolute;
//   top: 40%;
//   left: 82%;
//   width: 109px;
//   height: 109px;
// `;

// const Bread = styled.div`
//   background-image: url("./img/intro/breadIcon.svg");
//   position: absolute;
//   top: 76%;
//   left: 74%;
//   width: 100px;
//   height: 100px;
// `;

// export function Intro() {
//   const controls = useAnimation();
//   React.useEffect(() => {
//     controls.start("start");
//   }, []);
//   return (
//     <Container>
//       <Logo />
//       <Computer>
//         <motion.div
//           className="Receipt"
//           style={{
//             ...getRandomTransformOrigin(),
//             position: "absolute",
//             top: "32%",
//             left: "38%",
//             transform: "translate(-50%, -50%)",
//             width: "244px",
//             height: "140px",
//             backgroundImage: "url(./img/intro/영수증%20캐릭터.svg)",
//           }}
//           // -- controls --
//           // custom={i}
//           variants={variants}
//           animate={controls}
//         />
//       </Computer>
//       <Shopping />
//       <Heart />
//       <Food />
//       <Coffee />
//       <Percent />
//       <Bread />
//     </Container>
//   );
// }
