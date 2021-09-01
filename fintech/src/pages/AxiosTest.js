import React from 'react';
import axios from "axios";

const AxiosTest = () => {

    const handleGetData = () => {
        console.log("버튼 이벤트");
        axios.get("https://newsapi.org/v2/everything?q=삼성&from=2021-07-24&sortBy=publishedAt&apiKey=580a5f40169a447ba65a218755096133&language=ko").then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <button onClick={handleGetData}>데이터 가져오기</button>
        </div>
    );
};

export default AxiosTest
