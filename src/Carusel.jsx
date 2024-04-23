import { Carousel } from "antd";
import flower1 from "./images/flower1.jpg";
import flower2 from "./images/flower2.jpg";
import flower3 from "./images/flower3.jpg";
// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
const Mega = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src={flower1} />
      </div>
      <div>
        <img src={flower2} />
      </div>
      <div>
        <img src={flower3} />
      </div>
    </Carousel>
  );
};
export default Mega;
