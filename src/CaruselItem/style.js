import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 505px;
  display: flex;
`;

CarouselWrapper.Left = styled.div`
  width: 60%;
  height: 100%;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
`;

CarouselWrapper.Right = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );

  .img-big {
    position: absolute;
    width: 400px;
    /* left: 60px;
    bottom: 5px; */
    top: 50px;
    left: 100px;
  }

  .img-small {
    width: 135px;
    height: 135px;
    position: absolute;
    /* z-index: 10;
    bottom: 0;
    left: 100px; */
    top: 70%;
  }
`;

export const CaruselFlower = styled.div``;

CaruselFlower.Left = styled.div`
  width: 60%;
  padding: 30.5px;
  background-color: #fbfbfb;
`;

CaruselFlower.Left.Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: left;
  position: relative;
  top: 37px;
`;
CaruselFlower.Left.Text1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 70px;
  font-weight: 800;
  line-height: 70px;
  text-align: left;
  width: 575px;
  flex-grow: 0;

  .planet {
    color: #46a358;
  }
`;

CaruselFlower.Left.Text2 = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  width: 557px;
  position: relative;
  top: -25px;
  width: 557px;
  display: flex;
  flex-grow: 0;
`;
