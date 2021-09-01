import React, {useEffect, useState} from 'react'
import Header from '../component/Header'
import axios from "axios"
import Card from '../component/main/Card';

const Main = () => {
    const [accountList, setAccountList] = useState([]);
    useEffect(() => {
        // 사용자 계좌 목록 요청 만들기
        getAccountList();
    }, []);
    const getAccountList = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");
        const option = {
            method: "GET",
            url: `/v2.0/user/me`,
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
            params : {
                user_seq_no: userSeqNo
            },
          };
        axios(option).then(({data}) => {
            console.log(data);
            setAccountList(data.res_list);
        });
    };

    return (
        <div>
            <Header title={"메인"}></Header>
            {accountList.map((account) => {
                return (
                    <Card 
                    key={account.fintech_use_num}
                    bankName={account.bank_name}
                    fintechUseNo={account.fintech_use_num}>
                    </Card>
                );
            })}
        </div>
    );
};

export default Main
