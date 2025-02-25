import styled from "styled-components";
import bgObj1 from "../img/bg_obj1.webp";
import bgObj2 from "../img/bg_obj2.webp";
import deco from "../img/img_deco.webp";

const Box = styled.div`
  margin-top: 120px;
  box-sizing: border-box;
`;

const ImgBox = styled.div`
  position: relative;
  margin: 100px 0 0;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -20px;
    top: -30px;
    width: 60px;
    height: 60px;
    background: url(${bgObj2}) no-repeat center/100% auto;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: -30px;
    bottom: -30px;
    transform: rotate(-30deg);
    width: 60px;
    height: 60px;
    background: url(${bgObj1}) no-repeat center/100% auto;
  }
`;

const ImgList = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 5px;
  font-size: 0;
  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #9999;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  & > li {
    display: inline-block;
    margin: 0;
  }
`;

const ImgDesc = styled.p`
  color: #999;
  font-size: 12px;
  text-align: left;
`;

const SubTitle = styled.h2`
  position: relative;
  font-size: 26px;
  &:before {
    content: "";
    position: absolute;
    top: -40px;
    left: -10px;
    width: 24px;
    height: 24px;
    background: url(${bgObj1}) no-repeat center/100% auto;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -40px;
    width: 60px;
    height: 14px;
    background: url(${deco}) no-repeat center/100% auto;
  }
`;

const Img = styled.img`
  width: 100%;
  & + & {
    margin-top: 10px;
  }
`;

function Gallery({
  subTitle,
  imgSrc01,
  imgSrc02,
  imgSrc03,
  imgSrc04,
  imgSrc05,
  imgSrc06,
  imgSrc07,
  imgInfo,
}) {
  return (
    <Box>
      <SubTitle>{subTitle}</SubTitle>
      <ImgBox>
        <ImgList>
          <li>
            <Img src={imgSrc01} />
          </li>
          <li>
            <Img src={imgSrc02} />
          </li>
          <li>
            <Img src={imgSrc03} />
          </li>
          <li>
            <Img src={imgSrc04} />
          </li>
          <li>
            <Img src={imgSrc05} />
          </li>
          <li>
            <Img src={imgSrc06} />
          </li>
          <li>
            <Img src={imgSrc07} />
          </li>
        </ImgList>
        <ImgDesc>{imgInfo}</ImgDesc>
      </ImgBox>
    </Box>
  );
}

export default Gallery;
