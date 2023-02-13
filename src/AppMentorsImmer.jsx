import React,{useReducer} from 'react';
import personReducer from './reducer/person-reducer';
import {useImmer} from 'use-immer';
export default function AppMentorsImmer(props) { 
    const [person, updatePerson] = useImmer(initialPerson);
   // const [person, setPerson] = useState(initialPerson);
    const handleUpadate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updatePerson((person) => {
            const mentor = person.mentors.find(m=>m.name===prev);
            mentor.name =current;
        });
    };
    const handleAdd = ()=>{
        const name = prompt(`멘토 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        updatePerson((person) => {
            person.mentors.push({name,title})
        });
        };
    const handleDel = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        updatePerson((person)=>{
            const index = person.mentors.findIndex(m=>m.name === name);
            person.mentors.splice(index, 1);
        })
    };
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor)=>(
                    <li key={mentor.id}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpadate}>멘토의 이름을 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDel}>멘토 삭제하기</button>
        </div>
    );
}
const initialPerson ={
    name:'엘리',
    title:'개발자',
    mentors:[
        {  
            id:'12314',
            name:'밥',
            title:'시니어개발자',
        },
        {
            id:'2141414',
            name:'제임스',
            title:'시니어개발자',
        },
    ],
};

