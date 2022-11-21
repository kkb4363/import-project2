const Days = () => {
    {/* 요일 렌더링 하기 위해 저장하는 배열 */}
    const days = [];
    {/* 요일 지정해주기 */} 
    const date = ['일','월','화','수','목','금','토'];
    
    {/* days 배열에 각각 요일 넣어주기 */}
    for (let i=0; i<7; i++){
        days.push(
            <div className='days-div'>
                {date[i]}
            </div>
        )
    }
    return(
    <>
        {/* 요일 렌더링 하기 */}
        <div className='days-wrapper'>{days}</div>
    </>
) 
}

export default Days;