import React from 'react';
import {data} from '../people'
const UseStateArr = () => {
    const [people, setPeople] = useState(data);
    return (
        <React.Fragment>
            {
                people.map((people) => {
                    const {id, name} = person;
                    return (
                        <div key={id} className={'item'}>
                            <p>{name}</p>
                            <button onClick={()=>removePeople(id)}>remove</button>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default UseStateArr;