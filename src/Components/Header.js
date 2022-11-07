import styled from 'styled-components';
import {AiTwotoneCalendar} from "react-icons/ai";
import {format} from 'date-fns';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";

{/* 지난 달, 다음 달 화살표 CSS */}
const ArrowStyle = {color:'#696969', fontSize:'22px', marginTop:'25px'};

{/* 달력아이콘 + "캘린더 보기" CSS */}
const Nav = styled.div`
display:flex;
span{
    margin-left:5px;
    font-size:18px;
}
`
{/* 제목없음 위에 바 만들기 CSS */}
const Hr = styled.div`
display:flex;
div:first-child{
    width:120px;
    height:3px;
    margin-top:8px;
    background-color:white;
}
div:last-child{
    width:880px;
    height:3px;
    margin-top:8px;
    background-color:rgba(52, 52, 52, 0.9);
}
`
{/* 0000년 0월 + 지난달 화살표, 다음달 화살표 CSS */}
const Main = styled.div`
display:flex;
`

const Header = ({currentMonth, prevMonth, nextMonth}) =>{
  
    return(
        <>
        <Nav>
            <span><AiTwotoneCalendar/>캘린더 보기</span>
        </Nav>
        <Hr>
        <div/>
        <div/>
        </Hr>
        <h2 style={{
                color:'#A9A9A9' ,
                marginBottom:'-7px',
                marginTop:'15px',
                opacity:0.5
            }}>
            제목 없음
        </h2>
        <Main>
            <h5 style={{color:'white', fontSize:'16px', marginRight:'700px'}}>
                {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월 
                {/* format 형식 = y는 연도, m은 월, d는 일을 나타냄. */}
            </h5>
            
            {/* 저번달로 가는 화살표 */}
            <AiOutlineLeft onClick={prevMonth} style={ArrowStyle}/>
            <h5 style={{color:'white',fontSize:'15px'}}> 
            오늘 
            </h5>
            {/* 다음달로 가는 화살표 */}
            <AiOutlineRight onClick={nextMonth} style={ArrowStyle}/>
        
        </Main>
        </>
    )
}

export default Header;