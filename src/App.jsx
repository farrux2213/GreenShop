import { Component } from "react";
import { Wrapper } from "./style";
import Logo from "/Logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import shop from "/shop.svg";
import ellipseShop from "/ellipseShop.svg";
import search from "/search.svg";

class App extends Component {
  render() {
    return (
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
    );
  }
}
export default App;

// import { TinyColor } from "@ctrl/tinycolor";
// import { Button, ConfigProvider, Space } from "antd";
// const colors1 = ["#6253E1", "#04BEFE"];

// const getHoverColors = (colors) =>
//   colors.map((color) => new TinyColor(color).lighten(5).toString());
// const getActiveColors = (colors) =>
//   colors.map((color) => new TinyColor(color).darken(5).toString());
// const App = () => (
//   <Space>
//     <ConfigProvider
//       theme={{
//         components: {
//           Button: {
//             colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
//             colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
//               colors1
//             ).join(", ")})`,
//             colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
//               colors1
//             ).join(", ")})`,
//             lineWidth: 0,
//           },
//         },
//       }}
//     >
//       <Button type="primary" size="large">
//         Gradient 1
//       </Button>
//     </ConfigProvider>
//   </Space>
// );
// export default App;
