import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaClinicMedical, FaAllergies} from "react-icons/fa";
import { TbVaccine } from "react-icons/tb";
import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiUserGroup,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'overview',
		label: 'Overview',
		path: '/overview',
		icon: <HiOutlineViewGrid />
	},
    {
        key: 'docto',
        label: 'Doctor',
        path: '/doctorpanel',
        icon: <GiPlagueDoctorProfile />
    },
	{
		key: 'patient',
		label: 'Patient',
		path: '/patientpanel',
		icon: <HiUserGroup />
	},
    {
		key: 'medicalreports',
		label: 'Medical Report',
		path: '/medicalreportpanel',
		icon: <HiOutlineCube />
	},
	{
		key: 'medicalcenter',
		label: 'Medical Center',
		path: '/',
		icon: <FaClinicMedical />
	},
	{
		key: 'allergytable',
		label: 'Allergy Information',
		path: '/allergypanel',
		icon: <FaAllergies />
	},
	{
		key: 'vaccinetable',
		label: 'Vaccine Information',
		path: '/vaccinepanel',
		icon: <TbVaccine />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/',
		icon: <HiOutlineAnnotation />
	}
    
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/login',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/login',
		icon: <HiOutlineQuestionMarkCircle />
	}
]