import React from 'react'

function Detial(props){
    return(
        <React.Fragment>
            <p>Number of pages: {props.inner.page} </p>
            <p>book color: {props.inner.color}</p>
        </React.Fragment>
    ) 
}

export default function Author(props){
    function formatDate(date) {
        return date.toLocaleDateString();
    }

      
    return <div>
        <Detial inner={props.info} />

        Author name: {props.name} <br/>
        book name  : {props.book} <br/>
        date : {formatDate(props.date)}

    </div>
}   