import React, { useState, useEffect } from "react";
import Header from '../component/Header';
// 쿼리스트링을 가져오기 위한 React Hook
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import axios from "axios";


const AuthResult = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const [accessToken, setAccessToken] = useState("토큰 받아오기 전");
  const [userSeqNo, setUserSeqNo] = useState("user seq no");

    useEffect(() => {
        getAccessToken();
    }, []);

    const getAccessToken = () => {
        console.log("토큰을 가져옵니다");
        const sendData = {
          code: code,
          client_id: "76dc91b7-9220-435a-aaeb-969fbbd5f2fa",
          client_secret: "d3d8dd55-5561-46ee-a59f-feedf3f46442",
          redirect_uri: "http://localhost:3000/authResult",
          grant_type: "authorization_code",
        };
        //전달하는 정보의 sendData(JsObject) 선언
    
        const encodedSendData = queryString.stringify(sendData);
        //전달하는 sendData 형식의 변경
        
        const option = {
          method: "POST",
          url: "/oauth/2.0/token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: encodedSendData,
        };const option = {
          method: "POST",
          url: "/oauth/2.0/token",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: encodedSendData,
        };

        //axios 오브젝트 설정
        axios(option).then((response) => {
          console.log(response.data.access_token);
          setAccessToken(response.data.access_token);
          setUserSeqNo(response.data.user_seq_no);
          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem("userSeqNo", response.data.user_seq_no);
          //로컬 스토리지에 데이터 저장
          window.opener.location.href = "/main";
          window.close();
        });
       
      };
    
      return (
        <div>
          <Header title="인증 결과"></Header>
          <p>인증 코드 : {code}</p>
          <p>AccessToken : {accessToken}</p>
          <p>userSeqNo : {userSeqNo}</p>
        </div>
      );
    };
    
    export default AuthResult;
    