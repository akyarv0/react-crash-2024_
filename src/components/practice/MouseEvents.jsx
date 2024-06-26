import { useState } from "react";

const MouseEvent = () => {
  const initialStyle = {
    color: "red",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    textShadow: "0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red",
  };

  const [doubleStyle, setDoubleStyle] = useState(null);
  const [visible, setVisible] = useState(false);

  // mouse koordinatları tutan state'ler
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  //? doubleClick event
  const handleDoubleClick = () => {
    setDoubleStyle(doubleStyle ? null : initialStyle);
  };

  //? mouseMove event
  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center flex flex-col items-center mt-4 border">
      <h2 className="text-red-500">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-green-500 text-white w-1/2 p-4"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        todo item 1
      </div>
      {/* Conditional Rendering */}
      <p>{visible && <span>For detail ....</span>}</p>
      <div
        id="todo-2"
        className="bg-green-500 text-white w-1/2 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
        style={doubleStyle}
      >
        todo item 2
      </div>
      <div
        id="todo-3"
        className="bg-green-500 text-white w-1/2 p-4 mt-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>
      X: {coordX} and Y: {coordY}
    </div>
  );
};

export default MouseEvent;
