import './Home.css'
import { useState } from "react";
import { Modal } from '../Modal/Modal';

function Home() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Home">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setModalOpen(true)}>
        {process.env.REACT_APP_BTN_TEXT || 'Open'}
      </button>

      <Modal
        open={modalOpen}
        titleContent={<h3> Modal Title </h3>}
        cancelFn={() => setModalOpen(false)}
        content={
          <>
            <h2>This is a modal</h2>
            <p>You can close it by pressing Escape key, pressing close, or clicking outside the modal.</p>
          </>
        }
      />
    </div>
  );
}

export default Home;