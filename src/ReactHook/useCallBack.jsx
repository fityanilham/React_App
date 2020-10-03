import React, { Fragment, useCallback } from "react";

const BelajarUseCallBack = (props) => {
  const [kelas, setKelas] = React.useState([]);
  
  const jumlahKelas = React.useCallback ( () => {
    return ["X TKJ", "X RPL", "XI TKJ", "XI RPL"];
  }, []);

  React.useEffect( () => {
    let data = jumlahKelas();
    setKelas(data);
    console.log('effect di panggil');
  }, [jumlahKelas]);
  return (
    <Fragment>
      <div className="container">
        <div className="card p-3 mt-5">
          <h1>Banyak Kelas</h1>
          <ol>
            {kelas.map((kelas) => (
              <li>{kelas}</li>
            ))}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default BelajarUseCallBack