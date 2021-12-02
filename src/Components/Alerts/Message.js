import React from 'react';

const Message = ({msg}) =>{
    return(
        <div>
            <h4 className="warning">Alert: {msg}</h4>
        </div>
    )
}

export default Message;