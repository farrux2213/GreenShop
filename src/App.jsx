import { Component } from "react";
import { Wrapper, CaruselFlower } from "./style";
import Logo from "/Logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import shop from "/shop.svg";
import ellipseShop from "/ellipseShop.svg";
import search from "/search.svg";
import caruselDot from "/caruselDot.svg";
import Appp from "./ANTD";

class App extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Wrapper.Left>
            <img src={Logo} />
          </Wrapper.Left>
          <Wrapper.Middle>
            <Wrapper.Middle.Item>Home</Wrapper.Middle.Item>
            <Wrapper.Middle.Item>Shop</Wrapper.Middle.Item>
            <Wrapper.Middle.Item>Plant Care</Wrapper.Middle.Item>
            <Wrapper.Middle.Item>Blogs</Wrapper.Middle.Item>
          </Wrapper.Middle>
          <Wrapper.Right>
            <img src={search} className="search" alt="no img" />
            <Wrapper.Right.Shop>
              <img src={shop} alt="no img" className="shop" />
              <img src={ellipseShop} alt="no img" className="ellipseShop" />
              <Wrapper.Right.Shop.h5>6</Wrapper.Right.Shop.h5>
            </Wrapper.Right.Shop>
            <Wrapper.Right.Login>
              <LogoutOutlined className="LogoutOutlined" />
              <Wrapper.Right.Login.Text>Login</Wrapper.Right.Login.Text>
            </Wrapper.Right.Login>
          </Wrapper.Right>
        </Wrapper>
        <CaruselFlower>
          <CaruselFlower.Left>
            <CaruselFlower.Left.Text>
              WELCOME TO GREENSHOP
            </CaruselFlower.Left.Text>
            <CaruselFlower.Left.Text1>
              LET’S MAKE A BETTER PLANET
            </CaruselFlower.Left.Text1>
            <CaruselFlower.Left.Text2>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </CaruselFlower.Left.Text2>
            <Appp></Appp>
          </CaruselFlower.Left>
          <CaruselFlower.Right></CaruselFlower.Right>
        </CaruselFlower>
        <img src={caruselDot} />
      </>
    );
  }
}
export default App;
