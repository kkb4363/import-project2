import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format } from "date-fns";
import { isSameMonth, addDays} from "date-fns";
import styled from "styled-components";
import { useState } from "react";

const Body = styled.div`
display:flex;
height:900px;
width:900px;
flex-direction:column;
`

const Div = styled.div`
display:flex;
width:900px;
height:150px;
flex-direction:row;
div:last-child{
    border-right-style:solid;
}
`
const InsineDiv = styled.div`
width:145px;
height:150px;
display:flex;
border: 0.1px solid white;
justify-content:flex-end;
border-right-style:none;
`

const Main = (currentMonth) => {
    {/* 해당 달 1일값 구하기 */}
    const monthStart = startOfMonth(currentMonth.currentMonth);
    
    {/* 해당 달 마지막 일 값 구하기 */}
    const monthEnd = endOfMonth(monthStart);
    
    {/* 첫 주의 첫번째 값 표시하기 위해 쓰임. */}
    const startDate = startOfWeek(monthStart);
    
    {/* 마지막주의 마지막 값까지 표시하기 위해 쓰임. */}
    const endDate = endOfWeek(monthEnd);
    
     {/* 1일 표시할 때 월 표시하기 위해 쓰임. */}
    let month = format(monthStart,"M");
    console.log(month)

    {/* day = 첫째날 */}
    let day = startDate;
    let days = [];
    let rows = [];
    

    let formattedDate = '';
    
    {/* while(startdate<=enddate) */}
    while(day <= endDate){
        
        for(let i=0; i<7; i++){
            formattedDate = format(day, 'd');
            days.push(
                <InsineDiv>
                    <span key={day}>
                    {formattedDate == 1 ? month+"월"+formattedDate+"일" : formattedDate}
                    </span>
                </InsineDiv>
            );
            day = addDays(day,1);
        }

            rows.push(
                <Div key={day}>
                    {days}
                </Div>
            )
        
        days = [];
    }


    return(
        <>
        <Body>{rows}</Body>
        </>
    )

}


export default Main;