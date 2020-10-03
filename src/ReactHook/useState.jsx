import React, { Fragment } from "react"

const BelajarUseState = () => {
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [array, setArray] = React.useState(["ayam", "bebek", "ikan"]);
  const [text, setText] = React.useState("");
  
  React.useEffect(function () {
    if (text.length) localStorage.setItem("text", text);
    console.log("ok");
  });

  const HandleTambah = () => {
    setCounter((c) => c + 1);
    setLoading(true);
    setArray([...array, "Kijang"]);
  }
  const HandleKurang = () => {
    setCounter((c) => c - 1);
    setLoading(false);
  }

  return (
    <Fragment>
      <div className="container">
        <h4 className="ml-5">{counter}</h4>
        <button className="btn btn-success ml-3" onClick={HandleTambah}>{loading ? "Loading" : "Tambah"}</button>
        <button className="btn btn-danger ml-3" onClick={HandleKurang}></button>

        <h3>Nama-nama hewan</h3>
        <ol>
            {array.map((hewan) => (
                <li>{hewan}</li>
            ))}
        </ol>
      </div>
    </Fragment>
  )
}

export default BelajarUseState