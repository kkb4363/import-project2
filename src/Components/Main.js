import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format } from "date-fns";
import {  addDays} from "date-fns";
import styled from "styled-components";

{/* 달력 틀 css */}
const DivWrapper = styled.div`
display:flex;
height:900px;
width:900px;
flex-direction:column;
`
{/* 달력 한줄(1주일) css */}
const DivWeek = styled.div`
display:flex;
width:900px;
height:150px;
flex-direction:row;
div:first-child{
    background-color:#2b2b2b;
}
div:last-child{
    border-right-style:solid;
    background-color:#2b2b2b;
}
`
{/* 달력 하루(1일) css */}
const DivDay = styled.div`
width:125px;
height:150px;
display:flex;
border: 0.1px solid #363636;
justify-content:flex-end;
border-right-style:none;
span{
    display:flex;
    margin-top:5px;
    margin-right:10px;
}
`

const Main = (currentMonth) => {
    const monthStart = startOfMonth(currentMonth.currentMonth); {/* 해당 달 1일값 구하기 */}
    const monthEnd = endOfMonth(monthStart);                    {/* 해당 달 마지막 일 값 구하기 */}
    const startDate = startOfWeek(monthStart);                  {/* 첫 주의 첫번째 값 표시하기 위해 쓰임. */}
    const endDate = endOfWeek(monthEnd);                        {/* 마지막주의 마지막 값까지 표시하기 위해 쓰임. */}

    let day = startDate;                                        {/* day = 첫째날 */}
    let days = [];                                              {/* 1주일치 day를 저장하기 위한 배열 */}
    let line = [];                                              {/* 전체 day를 출력하기 위해 days배열을 7주일씩 전부 저장하기 위한 배열 */}
    let formattedDate = '';
    
    console.log(format(day,'M'))
    console.log(format(monthStart,'M'))
    {/* while(startdate<=enddate) */}
    while(day <= endDate){
        {/* for문 => 일주일치 day를 line배열에 저장하기 */}
        for(let i=0; i<7; i++){
            formattedDate = format(day, 'd');
            days.push(
                <DivDay>
                    {/* 해당달의 1일에만 월,일 추가 표시 + 1일을 제외하고는 일만 표시하기 , 다음달의 1일에도 표시되지 않기 위한 코드입니다.*/}
                    <span className={format(monthStart,"M") === format(day,'M') ? "" : "notsamemonth"} key={day}>
                    {format(monthStart,"M") === format(day,'M') && formattedDate == '1' ? 
                    format(monthStart,'M')+'월'+formattedDate+'일' 
                    : formattedDate}
                    </span>
                </DivDay>
                );
            day = addDays(day,1);
        }

            line.push(
                <DivWeek key={day}>
                    {days}
                </DivWeek>
            )
        {/* 한 주를 저장하고, 새로운 한 주를 저장하기 위해 배열을 비움 */}
        days = [];
    }


    return(
        <>
        <DivWrapper>{line}</DivWrapper>
        </>
    )

}


export default Main;