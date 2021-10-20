import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

// const estilos = {
//     color: "red",
//     backgroundColor: "yellow",
// };

function TodoCounter(/* props */ /* { total, completed} */) {
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 /* style={estilos} */ className="TodoCounter">Haz completado {completedTodos} de {totalTodos } TODOs</h2>
    );
};

export { TodoCounter };