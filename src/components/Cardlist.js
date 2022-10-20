import Card from './Card';
import React from 'react';

const Cardlist =({robots})=>{



    return (
        <div>
            {
             robots.map((user,i) => {
    return <Card id={user.id} name={user.name} email={user.email} />
             })
}
        </div>   
        )
}

export default Cardlist