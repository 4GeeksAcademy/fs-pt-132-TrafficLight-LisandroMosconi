import React, { useState } from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("red");

    return (
        <div className="d-flex flex-column align-items-center mt-5">

            <div className="bg-dark" style={{ width: "10px", height: "100px" }}></div>

            <div className="traffic-light p-3 rounded">

                <div
                    onClick={() => setColor("red")}
                    className={`light red ${color === "red" ? "activeR" : ""}`}
                />

                <div
                    onClick={() => setColor("yellow")}
                    className={`light yellow ${color === "yellow" ? "activeY" : ""}`}
                />

                <div
                    onClick={() => setColor("green")}
                    className={`light green ${color === "green" ? "activeG" : ""}`}
                />

            </div>
        </div>
    );
};

export default TrafficLight;