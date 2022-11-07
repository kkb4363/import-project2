import Header from "../Components/Header";
import '../CSS/style.css'
import { useState } from "react";
import { addMonths, subMonths} from 'date-fns';

const Calander = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
    
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
      
    </>
  );
}

export default Calander;
