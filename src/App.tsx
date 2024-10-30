import './App.css'
import { useState } from "react";
import { Modal } from "./components/modal/Modal";

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setModalOpen(true)}>
        {process.env.BTN_TEXT || "Open"}
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

export default App;