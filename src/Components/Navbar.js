import styled from 'styled-components';
import {AiTwotoneCalendar} from "react-icons/ai";

const Nav = styled.div`
display:flex;
span{
    margin-left:5px;
    font-size:18px;
}
`
const Hr = styled.div`
display:flex;
div:first-child{
    width:8%;
    height:3px;
    margin-top:8px;
    background-color:white;
}
div:last-child{
    width:92%;
    height:3px;
    margin-top:8px;
    background-color:rgba(52, 52, 52, 0.9);
}
`

const Navbar = () =>{
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
            }}>제목 없음
        </h2>
        </>
    )
}

export default Navbar;