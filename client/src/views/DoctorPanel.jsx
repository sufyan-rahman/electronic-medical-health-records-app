import React from 'react'
import RegisterDoctor from './RegisterDoctor';
import Modal from '../components/Modal';
import { useState } from 'react';
import DoctorTable from '../components/DoctorTable';

export default function DoctorPanel() {
 
  const[showModal, setShowModal] = useState(false);

  return (
  <>
    <div className='pb-4'>
      <button onClick={()=>setShowModal(true)} className='flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        Register Doctor
      </button>
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}> 
        <RegisterDoctor/>
      </Modal>
    </div>
        <div className="flex flex-col gap-4 w-full">
        <DoctorTable/>
    </div>
    </>
  )
}
