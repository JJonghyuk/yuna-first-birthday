import styled from "styled-components";
import deco from "../img/img_deco.webp";
import mapImg from "../img/img_map.png";

const mapUrl =
  "https://m.place.naver.com/accommodation/1037430960/location?businessCategory=hotel&filter=location&selected_place_id=1037430960";

const Box = styled.div`
  position: relative;
  margin-top: 100px;
  box-sizing: border-box;
`;

const SubTitle = styled.h2`
  position: relative;
  font-size: 26px;
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

const MapImg = styled.img`
  display: block;
  width: 100%;
`;

const MapLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MapDesc = styled.p`
  color: #999;
  font-size: 12px;
  text-align: right;
`;

const InfoBox = styled.div`
  & + & {
    margin-top: 40px;
  }
`;

const InfoTitle = styled.strong`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;

const InfoText = styled.span`
  display: block;
  margin-top: 10px;
`;

function Map({ subTitle, mapInfo, subwayInfo, parkingInfo }) {
  return (
    <Box>
      <SubTitle>{subTitle}</SubTitle>
      <Box>
        <MapImg src={mapImg} />
        <MapLink href={mapUrl} target="_blank" />
        <MapDesc>{mapInfo}</MapDesc>
      </Box>
      <Box>
        <InfoBox>
          <InfoTitle>지하철</InfoTitle>
          <InfoText>{subwayInfo}</InfoText>
        </InfoBox>
        <InfoBox>
          <InfoTitle>주차</InfoTitle>
          <InfoText>{parkingInfo}</InfoText>
        </InfoBox>
      </Box>
    </Box>
  );
}

export default Map;
