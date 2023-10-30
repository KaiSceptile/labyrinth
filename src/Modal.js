import React, { useState }from "react";
import Modal from 'react-modal';
const style={content:{
  width: '480px',
  height: '320px',
  margin: 'auto',
}}

function ModalWindow(props){
const [modalIsOpen, setModalIsOpen] = useState(true);
const closeModal = () => {
  setModalIsOpen(false);
};

  console.log(props);
  let text;
  if (props.time===false) {text='Failed to build path!'}
  else {
    text="Spent time to built path - "+props.time+" ms";
  }

  const modalContent = (
    <div class="modal">
      <p>{text}</p>
      <button onClick={closeModal}>Close..</button>
    </div>
  );
  const click = () =>{
    //setState(false);
  }
  return (
  <div>
    <Modal style={style} isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalContent}
    </Modal>
  </div>
);
}

export default ModalWindow;