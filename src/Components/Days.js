import styled from "styled-components";

const DaysRow = styled.div`
display:flex;
justify-content:space-between;
width:880px;
margin-top:-20px;
`

const Days1 = styled.div`
    width:120px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Days = () => {
    const days = [];
    const date = ['일','월','화','수','목','금','토'];
    for (let i=0; i<7; i++){
        days.push(
            <Days1>
                {date[i]}
            </Days1>
        )
    }
    return(
    <>
        <DaysRow>{days}</DaysRow>
    </>
) 
}

export default Days;