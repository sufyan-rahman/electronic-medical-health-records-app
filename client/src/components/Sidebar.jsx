import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { MdHealthAndSafety } from "react-icons/md";
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../library/navigation';
import { useNavigate } from 'react-router-dom';

const linkClass =
	'flex items-center gap-2 px-3 py-2 hover:bg-gray-600 hover:no-underline active:bg-indigo-900 rounded-md text-base'

export default function Sidebar() {
	const navigate = useNavigate();
	const logout = () => {
		sessionStorage.removeItem("accessToken")
		navigate('/login')
	}
  return (
		<div className="bg-gray-800 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3 text-white">
				<MdHealthAndSafety fontSize={24} />
				<span className="text-lg">EHR webapp</span>
			</div>
			 <div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-violet-200">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div 
				onClick={logout}
				className={classNames(linkClass, 'cursor-pointer text-red-500 font-bold')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-indigo-900 text-white font-bold' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}