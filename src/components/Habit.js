import React from "react"

const Habit = (props) => {
    const list = props.data.map((item) => <li>{item}</li>)

    return (
    <div>
        <h1>{props.title}</h1>
        <ul>{list}</ul>
    </div>
    )

}


export default Habit