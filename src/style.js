import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 78px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px solid #46a35880;
`;

Wrapper.Left = styled.div``;

Wrapper.Middle = styled.div`
  display: flex;
  gap: 30px;
`;

Wrapper.Right = styled.div`
  display: flex;
  gap: 30px;
`;

Wrapper.Middle.Item = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 20.11px;
  text-align: left;
  position: relative;
  transition: font-weight 0.3s;

  &::before {
    content: "";
    display: none;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #46a358;
    bottom: -29px;
  }

  &:hover::before {
    display: block;
  }
`;

Wrapper.Right.Login = styled.div`
  display: flex;
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  border: 1px solid #46a358;

  .LogoutOutlined {
    color: white;
    position: relative;
    left: 16px;
    top: 9.5px;
  }
`;

Wrapper.Right.Login.Text = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.11px;
  color: white;
  position: relative;
  left: 23px;
  top: -8px;
`;

Wrapper.Right.Shop = styled.div`
  display: flex;
  align-items: baseline;
  width: 29px;
  height: 24px;

  .shop {
    position: relative;
    top: 5px;
  }

  .ellipseShop {
    position: relative;
    left: -8px;
    top: -3px;
  }
`;

Wrapper.Right.Shop.h5 = styled.h5`
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.57px;
  text-align: left;
  color: #fff;
  position: relative;
  left: -18.8px;
  top: -7.7px;
`;

const CaruselFlower = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 505px;
  background-color: orange;
  margin: auto;
`;

CaruselFlower.Left = styled.div`
  width: 50%;
`;
CaruselFlower.Right = styled.div`
  width: 50%;
  background-color: yellow;
`;

CaruselFlower.Left.Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: left;
`;

CaruselFlower.Left.Text1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 70px;
  font-weight: 800;
  line-height: 70px;
  text-align: left;
`;

CaruselFlower.Left.Text2 = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

// const Uppercase = () => {
//   return CaruselFlower.Left.Text1.toUpperCase();
// };

// console.log(Uppercase());

export { Wrapper, CaruselFlower };
