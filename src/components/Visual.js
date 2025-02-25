import styled from "styled-components";
import frameImage from "../img/bg_frame.webp";
import GalleryImg01 from "../img/img_visual01.jpeg";
import bgObj2 from "../img/bg_obj2.webp";
import bgObj3 from "../img/bg_obj3.webp";

const InfoText = styled.span`
  position: relative;
  display: block;
  & + & {
    margin-top: 10px;
  }
  &:nth-child(2) {
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: -10px;
      bottom: -10px;
      width: 40px;
      height: 40px;
      background: url(${bgObj2}) no-repeat center/100% auto;
    }
  }
  &:nth-child(6) {
    &:before {
      content: "";
      display: block;
      position: absolute;
      right: -30px;
      bottom: -30px;
      width: 30px;
      height: 30px;
      background: url(${bgObj3}) no-repeat center/100% auto;
    }
  }
`;

const Box = styled.div`
  margin: 0;
  box-sizing: border-box;
  & + & {
    margin-top: 60px;
  }
  & + ${InfoText} {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  & + ${Box} {
    margin-top: 10px;
  }
`;

const TitleRed = styled.span`
  display: block;
  color: #ec6781;
  font-weight: 600;
  line-height: 1;
`;

const Img = styled.img`
  display: flex;
  width: 100%;
  height: 430px;
  background: url(${GalleryImg01}) no-repeat center/auto 100%;
`;

const DescText = styled.p`
  font-weight: 500;
  & + & {
    margin-top: 4px;
  }
`;

function Visual({
  title,
  desc01,
  desc02,
  dad,
  mom,
  dDay,
  time,
  address,
  addressDetail,
}) {
  return (
    <Box>
      <Title>
        {title}
        <TitleRed>처음, 생일</TitleRed>
      </Title>
      <Box>
        <Img src={frameImage} />
      </Box>
      <Box>
        <DescText>{desc01}</DescText>
        <DescText>{desc02}</DescText>
      </Box>
      <Box>
        <InfoText>
          아빠 {dad}, 엄마 {mom}
        </InfoText>
        <InfoText>{dDay}</InfoText>
        <InfoText>{time}</InfoText>
      </Box>
      <InfoText>{address}</InfoText>
      <InfoText>{addressDetail}</InfoText>
    </Box>
  );
}

export default Visual;
