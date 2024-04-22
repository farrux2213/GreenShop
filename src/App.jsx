import { Component } from "react";
import "./App.css";
import { Wrapper, CaruselFlower, CaruselDotimg } from "./style";
// import { PlusSlides, CurrentSlide, ShowSlides } from "./carusel";
import Logo from "/Logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import shop from "/shop.svg";
import ellipseShop from "/ellipseShop.svg";
import search from "/search.svg";
import Appp from "./ANTD";
// import imageFlowers from "/imageFlowers.svg";
// import smallFlowers from "/smallFlowers.svg";
import Flickity from "react-flickity-component";
import "./flickity.css";
import flower1 from "./images/flower1.jpg";
import flower2 from "./images/flower2.jpg";
import flower3 from "./images/flower3.jpg";
import flower4 from "./images/flower4.jpg";
import flower5 from "./images/flower5.jpg";
import flower6 from "./images/flower6.jpg";
class App extends Component {
  render() {
    const flickityOptions = {
      initialIndex: 2,
    };

    const cars = {
      id: [1, 2, 3, 4, 5, 6],
      title: ["Flower1", "Flower2", "Flower3", "Flower4", "Flower5", "Flower6"],
      image: [flower1, flower2, flower3, flower1, flower2, flower3],
    };

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
              LET’S MAKE A BETTER <span className="planet">PLANET</span>
            </CaruselFlower.Left.Text1>
            <CaruselFlower.Left.Text2>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </CaruselFlower.Left.Text2>
            <Appp></Appp>
          </CaruselFlower.Left>
          <CaruselFlower.Right>
            {/* <div className="mySlides fade">
              <img src={smallFlowers} alt="no image" className="smallFlower" />
            </div>
            <div className="mySlides fade">
              <img src={imageFlowers} alt="no image" className="bigFlower" />
            </div> */}

            <Flickity
              className="Slider"
              elementType="div"
              disableImagesLoaded={false}
              options={flickityOptions}
              reloadOnUpdate
              static
            >
              {cars["id"].map((index) => {
                return (
                  <div key={index} className="Plate">
                    <>
                      <div
                        style={{
                          backgroundImage: `url(${cars["image"][index - 1]})`,
                          width: "370px",
                          height: "400px",
                          backgroundSize: "cover",

                          // backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </>
                  </div>
                );
              })}
            </Flickity>

            {/* <a className="prev" onClick={PlusSlides}>
              &#10094
            </a>
            <a className="next" onClick={PlusSlides}>
              &#10095
            </a> */}
          </CaruselFlower.Right>
          {/* <br></br> */}

          {/* <div style="text-align: center;">
            <span className="dot" onClick={CurrentSlide}></span>
            <span className="dot" onClick={CurrentSlide}></span>
            <span className="dot" onClick={CurrentSlide}></span>
          </div> */}
        </CaruselFlower>
        {/* <CaruselDotimg>
          <img src={caruselDot} alt="no image" className="carusel" />
        </CaruselDotimg> */}
      </>
    );
  }
}
export default App;
