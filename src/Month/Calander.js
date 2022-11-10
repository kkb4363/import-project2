import Header from "../Components/Header";
import Days from '../Components/Days';
import '../CSS/style.css'
import { useState } from "react";
import { addMonths, subMonths,format} from 'date-fns';
import Main from "../Components/Main";
{/* addMonths, subMonths 는 date-fns의 메소드이다. */}

const Calander = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  {/* subMonth(현재달, 1만큼 뺴기) */}
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }; 
  {/* addMonth(현재달, 1만큼 더하기) */}
  const nextMonth = () => {
  setCurrentMonth(addMonths(currentMonth, 1));
  }; 
  
  return (
    <>
      {/* Header 부분 렌더링 */}
      <Header
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      /> 
      
      {/* 요일 렌더링 */}
      <Days/>
      
      <Main currentMonth={currentMonth}/>

    </>
  );
}

export default Calander;
