import React, { useState } from "react";

const EightBall = ({ answers }) => {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a Question");
    let respond = () => {
        let rand = Math.floor(Math.random() * answers.length);
        setColor(answers[rand].color);
        setMsg(answers[rand].msg);
    };
    return (
        <button
            className="Ball"
            style={{
                backgroundColor: color,
                height: "500px",
                width: "500px",
                borderRadius: "50%",
                fontSize: "50px",
                color: "white",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={respond} >
            {msg}
        </button >
    )
};

export default EightBall;