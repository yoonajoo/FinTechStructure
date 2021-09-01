import axios from 'axios';
import React, {useState} from 'react'
import Header from '../component/Header'
import NewsList from '../component/newsSearch/NewsList';
import SearchInput from '../component/newsSearch/SearchInput'

const NewsSearch = () => {

    const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState([]);

    // e= event
    const handleSeachTextChange = (e) => {
        const{value} = e.target;
        setSearchText(value);

    };

    const handleSearchButtonClick = () => {
        console.log(searchText);
        // 뉴스 API 요청 전달하고 searchResult 변경하기
        
        axios
            .get(`https://newsapi.org/v2/everything?q=${searchText}&from=2021-08-01&sortBy=publishedAt&apiKey=580a5f40169a447ba65a218755096133&language=ko`).then((response) => {
                console.log(response.data.articles);
                setSearchResult(response.data.articles);
            });
       
    };

    return (
        <div>
            <Header title="뉴스 검색"></Header>
            <SearchInput 
            handleInput={handleSeachTextChange}
            handleClick={handleSearchButtonClick}></SearchInput>
            <NewsList searchResult = {searchResult}></NewsList>
        </div>
    );
};

export default NewsSearch
