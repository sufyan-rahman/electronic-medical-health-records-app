import React from 'react'

export default function HealthReportCreate() {
  return (
      <>
          <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 text-white p-8 flex items-center justify-center">
              <div className=''>
                <h1 className="text-4xl font-bold mb-4">Electronic Medical Records</h1>
                <p className="text-lg mb-4">Health Record Dashboard</p>
                <p className="text-lg">Enter health details to create a report</p>
              </div>
            </div>
            {/* LOGIN FORM */}
            <div className="flex-1 bg-gray-100 flex justify-center items-center">
              <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Create Medical Report</h2>
                </div>
                <form className="mt-8 space-y-6">
                <div>
                    <label htmlFor="a_DOB"className="block text-sm font-medium text-gray-700">
                       Appointment Date
                    </label>
                    <div className="mt-1">
                      <input type="date" id="a_DOB" className='border-2'/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="visit_reason" className="block text-sm font-medium text-gray-700">
                      Appointment Reason
                    </label>
                    <div className="mt-1">
                      <input
                        id="visit_reason"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">
                      Diagnosis
                    </label>
                    <div className="mt-1">
                      <input
                        id="diagnosis"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="test" className="block text-sm font-medium text-gray-700">
                      Lab Test
                    </label>
                    <div className="mt-1">
                      <input
                        id="test"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="test_result" className="block text-sm font-medium text-gray-700">
                      Lab Test Result
                    </label>
                    <div className="mt-1">
                      <input
                        id="test_result"
                        type="file"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
                      Remarks
                    </label>
                    <div className="mt-1">
                      <input
                        id="remarks"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="prescription" className="block text-sm font-medium text-gray-700">
                      Prescription
                    </label>
                    <div className="mt-1">
                      <input
                        id="prescription"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className='border-2 rounded-l py-4 px-4'>
                    <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                      Vitals
                    </label>
                    <div className="mt-1">
                        <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                            Temperature
                        </label>
                        <input
                            id="patientid"
                            type="text"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-1">
                        <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                            Blood Pressure
                        </label>
                        <input
                            id="patientid"
                            type="text"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-1">
                        <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                            Blood Oxygen
                        </label>
                        <input
                            id="patientid"
                            type="text"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-1">
                        <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                            Heart Rate
                        </label>
                        <input
                            id="patientid"
                            type="text"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                  </div>

                  
                  <div>
                    <label htmlFor="patientid" className="block text-sm font-medium text-gray-700">
                      Patient ID
                    </label>
                    <div className="mt-1">
                      <input
                        id="patientid"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="doctorid" className="block text-sm font-medium text-gray-700">
                      Doctor ID
                    </label>
                    <div className="mt-1">
                      <input
                        id="doctorid"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Medical Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>  
      </>
      );
}
