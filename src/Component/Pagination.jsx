import React from "react";
function Pagination({ curr, handlePage }) {
  // const pages=new Array(total).fill(0).map((a,i)=><button onClick={()=>handlePage(i+1)}>{i+1}</button>)

  return (
    <div data-testid="page-container">
      {/* {pages} */}
      <button onClick={() => handlePage(1)} style={{ borderColor: "red" }}>
        1
      </button>
      <button onClick={() => handlePage(2)} style={{ borderColor: "red" }}>
        2
      </button>
      <button onClick={() => handlePage(3)} style={{ borderColor: "red" }}>
        3
      </button>
      <button onClick={() => handlePage(4)} style={{ borderColor: "red" }}>
        4
      </button>
      <button onClick={() => handlePage(5)} style={{ borderColor: "red" }}>
        5
      </button>
      <button onClick={() => handlePage(6)} style={{ borderColor: "red" }}>
        6
      </button>
      <button onClick={() => handlePage(7)} style={{ borderColor: "red" }}>
        7
      </button>
      <button onClick={() => handlePage(8)} style={{ borderColor: "red" }}>
        8
      </button>
      <button onClick={() => handlePage(9)} style={{ borderColor: "red" }}>
        9
      </button>
      <button onClick={() => handlePage(10)} style={{ borderColor: "red" }}>
        10
      </button>
    </div>
  );
}

export default Pagination;
