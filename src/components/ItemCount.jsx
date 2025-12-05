import React, { useState } from "react";

const ItemCount = ({onAdd}) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
const ejecutarCompra = () => {
  onAdd(count)
}
  return (
    <>
    <div>
 <button
        onClick={restar}
        style={{
          padding: "8px 12px",
          fontSize: "18px",
          marginRight: "10px",
          borderRadius: "6px",
          backgroundColor: "#e5e5e5",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        -
      </button>

      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "0 10px",
          minWidth: "30px",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        {count}
      </span>

      <button
        onClick={sumar}
        style={{
          padding: "8px 12px",
          fontSize: "18px",
          marginLeft: "10px",
          borderRadius: "6px",
          backgroundColor: "#e5e5e5",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
      + </button>
    </div>
      <button onClick={ejecutarCompra} disabled={count=== 0 || stock === 0}>Comprar</button>
      
    </>
  );
};

export default ItemCount;
