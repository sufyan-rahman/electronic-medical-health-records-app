import React from 'react'
import PatientTable from '../components/PatientTable'
import { FaUserPlus } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
import Modal from '../components/Modal';
import RegisterUser from './RegisterUser';
import { useState } from 'react';

export default function PatientPanel() {
    const[showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const navigateRegister = () => {
            navigate('/register_patient');
            };
  return (
    <>
    <div className='pb-4'>
        <button
            onClick={navigateRegister}
            className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            <div className='p-1'>
                <FaUserPlus fontSize={20} />
            </div>
            <div className='pl-2'>
                <p className=''>Add New Patient</p>
            </div>
        </button>
        {/* <button onClick={()=>setShowModal(true)} className='flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        CLICK FOR MODAL
      </button> */}
        <Modal isVisible={showModal} onClose={()=>setShowModal(false)}> 
            <RegisterUser/>
        </Modal>
    </div>
    <div className="flex flex-col gap-4 w-full">
        <PatientTable/>
    </div>
    </>
  )
}
