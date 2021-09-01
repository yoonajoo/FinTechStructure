import React, {useState} from 'react'

const EventExaple = () => {
     
    // let contents = "내용입니다.";
    let[contents, setContents] = useState("기본값 입력");

    
    // 실시간 값 받기
    const handleChange = (e) => {
        // e-> target -> value 에 값이 들어간다.
        /* console.log(e.target.value);
         contents = e.target.value; */

        // 값이 실시간으로 바뀐다.
        const {value} = e.target;
        setContents(value); 
    };

    // 클릭이벤트
    const handleClick = () => {
        alert(contents);
    };

    return (
        
        <div>
            <p>{contents}</p>
            {/* 실시간 값받기 연동 */}
            <input onChange={handleChange}></input>
            {/* 클릭이벤트 연동 */}
            <button onClick={handleClick}>확인</button>
        </div>
        
    );
};

export default EventExaple
