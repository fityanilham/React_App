import React, { Fragment, useEffect } from "react";

const MyChat = () => {
  const [friend, setFriend] = React.useState(null);
  React.useEffect(
    function () {
      if (!friend) return;
      console.log("effect di jalankan");
      return function () {
        console.log("component di bersihkan");
      };
    },
    [friend]
  );

  console.log("render ");
  return (
    <Fragment>
      <h2>Urutan Eksekusi</h2>
      <button onClick={(e) => setFriend("ihsan")}>ihsan</button>
      <button onClick={(e) => setFriend("arief")}>Arief</button>
      <br />
      {friend ? `friend ${friend}` : "tidak ada chat"}
    </Fragment>
  );
};

export default MyChat;