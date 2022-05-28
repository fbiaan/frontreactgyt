import React from 'react';
import { useState } from 'react'
import Modal from "../components/Modal";
import "./Reports.css";


function Reports() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='reports'>
      <h1>Reports</h1> 
      <br/>
      <h2>en español seria Reportes</h2>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

    </div>
  );
}

export default Reports;
