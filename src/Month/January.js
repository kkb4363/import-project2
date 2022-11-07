import { useEffect, useState } from "react";
import Loading from '../Components/Loading';
import axios from "axios";



const January = () => {
    {/* 로딩창 on/off */}
    const [isloading, setisloading] = useState(true);
    
    {/* api로 받아온 음력,양력 데이터 저장 */}
    const [lunday, setlunday] = useState([]); 
    
    {/* api로 받아온 특일 데이터 저장 */}
    const [holiday, setholiday] = useState([]);
    
    {/* 음력,양력 데이터 api로 받아오기 */}
    useEffect(()=>{
        axios.get(`https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?numOfRows=31&solYear=2022&solMonth=01&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI/mxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG/QQQ==`)
        .then((res)=>{setlunday(res.data.response.body.items.item)})
    },);

    {/* 특일 데이터 api로 받아오기 , 받아오기 성공 했을시 로딩창 false */}
    useEffect(()=>{
        axios.get(`https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=2022&solMonth=01&ServiceKey=ziROfCzWMmrKIseBzkXs58HpS39GI%2FmxjSEmUeZbKwYuyxnSc2kILXCBXlRpPZ8iam5cqwZqtw6db7CnWG%2FQQQ%3D%3D`)
        .then((res)=>{
            setholiday(res.data.response.body.items.item);
            setisloading(false);
        })
    })

    {/* api로 데이터 받아오는 시간동안 Loading페이지 출력 */}
    if(isloading){
        return <Loading/>
    }
    return(
        <>
        



        </>
    )
}

export default January;