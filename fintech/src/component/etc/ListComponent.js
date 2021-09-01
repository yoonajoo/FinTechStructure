import React, {useState} from 'react'
import ListItem from './ListItem';

const ListComponent = () => {
    const [users, setUsers] = useState([
        {name: "주유나", age: 25, height: 165},
        {name: "주경범", age: 22, height: 180},
        {name: "주유경", age: 26, height: 170}

    ]);
    return (
        <div>
            {/* 반복문 map => 배열에서 사용*/}
            {users.map((user)=> {
                return (
                  <ListItem username={user.name} 
                  age={user.age} 
                  height={user.height}></ListItem>
                );
            })}
            
        </div>
    );
};

export default ListComponent
