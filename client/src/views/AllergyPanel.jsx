import React from 'react'
import {useNavigate} from 'react-router-dom'
import MedicalReportTable from '../components/MedicalReportTable'
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function AllergyPanel() {
//   const navigate = useNavigate();

//   const navigateHealthReportCreate = () => {
//           navigate('/medicalreport/create');
//           };
  return (
    <>
      <div>
      {/* <button
            onClick={navigateHealthReportCreate}
            className="flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            <div className='p-1'>
                <HiOutlineDocumentReport fontSize={20} />
            </div>
            <div className='pl-2'>
                <p className=''>Create Medical Report</p>
            </div>
        </button> */}
      </div>
      <div className='pt-4'>
        <AllergyTable/>
      </div>
    </>
  )
}
