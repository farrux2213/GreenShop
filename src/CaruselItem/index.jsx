import { CarouselWrapper, CaruselFlower } from "./style";
import Appp from "../ANTD";

const CarouselItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img } = props;
  return (
    <CarouselWrapper>
      <CarouselWrapper.Left>
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
      </CarouselWrapper.Left>
      <CarouselWrapper.Right>
        <img src={img} alt="no img" className="img-big" />
        <img src={img} alt="no img" className="img-small" />
      </CarouselWrapper.Right>
    </CarouselWrapper>
  );
};

export default CarouselItem;
