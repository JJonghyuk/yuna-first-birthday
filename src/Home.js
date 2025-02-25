import styled from "styled-components";
import Visual from "./components/Visual";
import Gallery from "./components/Gallery";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import topImage from "./img/img_top.webp";
import bottomImage from "./img/img_bt.webp";
import GalleryImg01 from "./img/img_visual01.jpeg";
import GalleryImg02 from "./img/img_visual02.jpeg";
import GalleryImg03 from "./img/img_visual03.jpeg";
import GalleryImg04 from "./img/img_visual04.jpeg";
import GalleryImg05 from "./img/img_visual05.jpeg";
import GalleryImg06 from "./img/img_visual06.jpeg";
import GalleryImg07 from "./img/img_visual07.jpeg";

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 120px 20px;
  max-width: 430px;
  text-align: center;
  background: #fff;
  box-sizing: border-box;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 200px;
    background: url(${topImage}) no-repeat top center / 100% auto;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: url(${bottomImage}) no-repeat bottom center / 100% auto;
  }
`;

function Home() {
  return (
    <Wrap>
      <Visual
        title={"이유나"}
        desc01={"사랑스러운 유나의 첫 생일을 맞이합니다."}
        desc02={"이 특별한 날에 소중한 분들과 함께 기쁨을 나누고자 합니다."}
        dad={"이윤진"}
        mom={"김민희"}
        dDay={"2025년 3월 16일 일요일"}
        time={"오후 12시 30분"}
        address={"경기 고양시 덕양구 고양대로 1725"}
        addressDetail={"어반이스트 호텔 3층"}
      />
      <Gallery
        subTitle={"갤러리"}
        imgSrc01={GalleryImg01}
        imgSrc02={GalleryImg02}
        imgSrc03={GalleryImg03}
        imgSrc04={GalleryImg04}
        imgSrc05={GalleryImg05}
        imgSrc06={GalleryImg06}
        imgSrc07={GalleryImg07}
      />
      <Calendar subTitle={"캘린더"} />
      <Map
        subTitle={"오시는길"}
        mapInfo={"* 네이버 지도 바로가기"}
        subwayInfo={"[3호선 원흥역] 1번 출구 도보 6분"}
        parkingInfo={"호텔 건물내에 주차"}
      />
    </Wrap>
  );
}

export default Home;
