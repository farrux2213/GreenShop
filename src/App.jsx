import { Component } from "react";
import "./App.css";
import { Wrapper } from "./style";
import Logo from "/Logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import shop from "/shop.svg";
import ellipseShop from "/ellipseShop.svg";
import search from "/search.svg";
import CarouselItem from "./CaruselItem";
import { Carousel } from "antd";
import flower1 from "./images/flower1.jpg";
import flower2 from "./images/flower2.jpg";
import flower3 from "./images/flower3.jpg";

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
        <Carousel autoplay className="Carousel-join">
          <CarouselItem img={flower1}></CarouselItem>
          <CarouselItem img={flower2}></CarouselItem>
          <CarouselItem img={flower3}></CarouselItem>
        </Carousel>
      </>
    );
  }
}
export default App;
