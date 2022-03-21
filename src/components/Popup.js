import React, { useEffect, useRef } from "react";

const Popup = () => {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog ref={dialogRef}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
      numquam quo soluta amet fuga modi eum consequatur, sit ab earum quaerat
      tenetur, corrupti magni, molestiae excepturi tempore! Voluptates, libero
      nostrum.
    </dialog>
  );
};

export default Popup;
