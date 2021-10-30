import React from 'react'

export default function Todos(props) {
    const todolists = props.todolists;

    // console.log("component", todolists)

    return (
        <div className="container">
            {
            todolists.length > 0 ? ( todolists.map((todo)=>
                <ol> {todo}</ol> ) ):
                <h6>"Please Enter todos"</h6>


            }
            





        </div>
    )
}
