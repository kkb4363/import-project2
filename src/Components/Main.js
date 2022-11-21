import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, isLeapYear, monthsToQuarters } from "date-fns";
import {  addDays} from "date-fns";
import axios from "axios";
import {useEffect,useState} from 'react';
import Loading from "./Loading";

const Main = (currentMonth) => {
    const monthStart = startOfMonth(currentMonth.currentMonth); {/* 해당 달 1일값 구하기 */}
    const monthEnd = endOfMonth(monthStart);                    {/* 해당 달 마지막 일 값 구하기 */}
    const startDate = startOfWeek(monthStart);                  {/* 첫 주의 첫번째 값 표시하기 위해 쓰임. */}
    const endDate = endOfWeek(monthEnd);                        {/* 마지막주의 마지막 값까지 표시하기 위해 쓰임. */}

    const toapiyear = format(monthStart,'yyyy').toString();     {/* API 주소에 넣을 해당 연도 */}
    const toapimonth = format(monthStart,'MM').toString();      {/* API 주소에 넣을 해당 월 */}
    const PATH_NAME = `https://apis.data.go.kr/B090041/openapi/service`;
    
    let day = startDate;                                        {/* day = 첫째날 */}
    let days = [];                                              {/* 1주일치 day를 저장하기 위한 배열 */}
    let line = [];                                              {/* 전체 day를 출력하기 위해 days배열을 7주일씩 전부 저장하기 위한 배열 */}
    let formattedDate = '';
    
    const [holiday, setholiday] = useState([]);
    useEffect(()=>{
        axios.get(`${PATH_NAME}/SpcdeInfoService/getRestDeInfo?solYear=${toapiyear}&solMonth=${toapimonth}&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI%2FmxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG%2FQQQ%3D%3D`)
        .then((res)=>{
            setholiday(res.data.response.body.items.item);
        })}, [PATH_NAME, toapiyear, toapimonth]);

    
    const [isLoading,setisloading] = useState(true);
    const [lunday,setlunday] = useState([]);
    useEffect(()=>{
        axios.get(`${PATH_NAME}/LrsrCldInfoService/getLunCalInfo?numOfRows=31&solYear=${toapiyear}&solMonth=${toapimonth}&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI/mxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG/QQQ==`)
        .then((res)=>{setlunday(res.data.response.body.items.item);
            setisloading(false);
        })}, [PATH_NAME, toapiyear, toapimonth]);
    
    while(day <= endDate){
        {/* for문 => 1. 일주일치 day를 line배열에 저장하기 */}
        for(let i=0; i<7; i++){
            formattedDate = format(day, 'd').padStart(2,'0').toString();
            {/* 다른 달일 경우 회색으로 표시하기 위해 if문 사용 */}
            if(format(monthStart,'M') != format(day,'M')){
                days.push(
                <div className='day' key={day+"111"}>
                <span className='notsamemonth' key={day}>
                {formattedDate}
                </span>
                <span>
                    
                </span>
                </div>
                )
                }
            else{
                days.push(
                <div className='day' key={day+'55'}>
                <span key={day}>{/* 양력 출력 */}
                {formattedDate == '01' ? 
                format(monthStart,'M') + '월' + formattedDate + '일' :
                lunday.find(sol => sol.solDay == formattedDate)?.solDay}
                </span>
                <span key={day+'100'}>{/* 음력 출력 */}
                    {lunday.find(lun => lun.solDay == formattedDate)?.lunMonth+'월'
                    +lunday.find(lun => lun.solDay == formattedDate)?.lunDay+'일'}
                </span>
                <span key={day+'200'}>{/* 공휴일 출력 */}
                    {Array.isArray(holiday) ? holiday?.find(item => item.locdate.toString().slice(-2) == formattedDate)?.dateName
                    : holiday?.locdate.toString().slice(-2) == formattedDate ? holiday.dateName : ''}
                </span>
                </div>
                )
                }
            day = addDays(day,1);
        }

            line.push(
                <div className='week' key={day}>
                    {days}
                </div>
            )
        {/* 한 주를 저장하고, 새로운 한 주를 저장하기 위해 배열을 비움 */}
        days = [];
    }


    return(
        <>
        {isLoading ? <Loading/> :
                    <div className='wrapper'>{line}</div>}
        </>
    )

}


export default Main;