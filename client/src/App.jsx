import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import Overview from './views/Overview'
import LoginView from './views/LoginView'
import RegisterPatient from './views/RegisterPatient'
import RegisterDoctor from './views/RegisterDoctor'
import HealthReportCreate from './views/HealthReportCreate'
import Layout from './components/Layout'
import PatientPanel from './views/PatientPanel'
import DoctorPanel from './views/DoctorPanel'
import MedicalReportPanel from './views/MedicalReportPanel'
import PatientProfile from './views/PatientProfile'
import AllergyPanel from './components/AllergyTable'
import VaccinePanel from './components/VaccineTable'
import RegisterUser from './views/RegisterUser'
import MedicalReportDetails from './views/MedicalReportDetails'

function App() {
  return (
    <>
      <div>
        <Router>
          {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/overview" element={<Overview />} />
                <Route path="/patientpanel" element={<PatientPanel />} />
                <Route path="/doctorpanel" element={<DoctorPanel />} />
                <Route path="/medicalreportpanel" element={<MedicalReportPanel />} />
                <Route path="/allergypanel" element={<AllergyPanel />} />
                <Route path="/vaccinepanel" element={<VaccinePanel />} />
                <Route path="/patientprofile/:id" element={<PatientProfile />} />
                <Route path="/report/:id" element={<MedicalReportDetails />} />          
              </Route>
              <Route path="/adminview" element={<Overview />}/>
              <Route path="/login" element={<LoginView />}/>
              <Route path="/register_patient" element={<RegisterPatient />}/>
              <Route path="/register_user" element={<RegisterUser />}/>
              <Route path="/register/doctor" element={<RegisterDoctor />}/>
              <Route path="/medicalreport/create" element={<HealthReportCreate />}/>
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
