import styled from "styled-components";
import deco from "../img/img_deco.webp";
import bgObj1 from "../img/bg_obj1.webp";
import bgObj3 from "../img/bg_obj3.webp";

const Box = styled.div`
  margin-top: 120px;
  box-sizing: border-box;
`;

const TableBox = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -32px;
    top: -30px;
    transform: scaleX(-1);
    width: 30px;
    height: 30px;
    background: url(${bgObj3}) no-repeat center/100% auto;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    bottom: -10px;
    width: 30px;
    height: 30px;
    background: url(${bgObj1}) no-repeat center/100% auto;
  }
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

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

const Week = styled.td`
  @media screen and (min-width: 431px) {
    height: 53px;
  }
  height: 12.3256vw;
`;

const Date = styled.td`
  @media screen and (min-width: 431px) {
    height: 53px;
    line-height: 53px;
  }
  height: 12.3256vw;
  line-height: 12.3256vw;
`;
const PastDate = styled(Date)`
  color: #ddd;
`;
const DDay = styled(Date)`
  color: #fff;
  background: #ec6781;
  border-radius: 100px;
`;

function Calendar({ subTitle }) {
  return (
    <Box>
      <SubTitle>{subTitle}</SubTitle>
      <TableBox>
        <Table>
          <thead>
            <tr>
              <Week style={{ color: "red" }}>일</Week>
              <Week>월</Week>
              <Week>화</Week>
              <Week>수</Week>
              <Week>목</Week>
              <Week>금</Week>
              <Week style={{ color: "blue" }}>토</Week>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PastDate>23</PastDate>
              <PastDate>24</PastDate>
              <PastDate>25</PastDate>
              <PastDate>26</PastDate>
              <PastDate>27</PastDate>
              <PastDate>28</PastDate>
              <Date>1</Date>
            </tr>
            <tr>
              <Date>2</Date>
              <Date>3</Date>
              <Date>4</Date>
              <Date>5</Date>
              <Date>6</Date>
              <Date>7</Date>
              <Date>8</Date>
            </tr>
            <tr>
              <Date>9</Date>
              <Date>10</Date>
              <Date>11</Date>
              <Date>12</Date>
              <Date>13</Date>
              <Date>14</Date>
              <Date>15</Date>
            </tr>
            <tr>
              <DDay>16</DDay>
              <Date>17</Date>
              <Date>18</Date>
              <Date>19</Date>
              <Date>20</Date>
              <Date>21</Date>
              <Date>22</Date>
            </tr>
            <tr>
              <Date>23</Date>
              <Date>24</Date>
              <Date>25</Date>
              <Date>26</Date>
              <Date>27</Date>
              <Date>28</Date>
              <Date>29</Date>
            </tr>
            <tr>
              <Date>30</Date>
              <Date>31</Date>
            </tr>
          </tbody>
        </Table>
      </TableBox>
    </Box>
  );
}

export default Calendar;
