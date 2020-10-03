import React, { Fragment } from 'react'

const BelajarUseEffect = () => {
  const [text, setText] = React.useState("");
  const [secconds, setSecconds] = React.useState(0);

  // Effect 1
  React.useEffect (function () {
      if (text.length) localStorage.setItem("text", text);
      console.log("Text berhasil di simpan")
    }, [text])

  // Effect 2
  React.useEffect (function () {
   setText(localStorage.getItem("text"));
   let Interval = setInterval( () => {
    setSecconds( (secconds) => secconds + 1);
   }, 1000);

   return function() {
     clearInterval(Interval);
   }
  }, [])
  return (
    <Fragment>
      <div className="container">
        <div className="card d-flex justify-content-center p-5 mt-5 m-0">
          <h1 className="text-center">Latihan useEffect</h1>
          <textarea type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <h2>
            Waktu : {Math.floor(secconds / 60)} menit {secconds % 60} detik
          </h2>
        </div>
      </div>
    </Fragment>
  )
}
export default BelajarUseEffect