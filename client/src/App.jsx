import {useState, useEffect} from 'react'
import { LayoutDashboard, File, Layers, SquareGanttChart, SquareUserRound, LifeBuoy, Settings, FileType2 } from "lucide-react";
import Sidebar, {SidebarItem} from './layouts/Sidebar';
import DashboardPage from './pages/Dashboard';
import ApplicationPage from './pages/Applications/AppView';
import ApplicationCreate from './pages/Applications/AppCreate';
import ApplicationCreate2 from './pages/Applications/AppCreate2';
import ApplicationUpdate from './pages/Applications/AppUpdate';
import DepartmentPage from './pages/Departments/DeptView';
import EmployeePage from './pages/Employees/EmpView';
import EmployeeEdit from './pages/Employees/EmpEdit';
import EmployeeCreate from './pages/Employees/EmpCreate';
import LeavePage from './pages/Leaves/LeaveView';
import ReportPage from './pages/Reports/ReportView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='flex'>
        <div className='w-fit'>
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" path='/' onClick={() => setActive(path)}/>
            <SidebarItem icon={<File size={20} />} text="Application" path='/Application' />
            <SidebarItem icon={<SquareUserRound size={20} />} text="Employees" path='/Employee' /> 
            <SidebarItem icon={<Layers size={20} />} text="Department" path='/Department'/>
            <SidebarItem icon={<FileType2 size={20} />} text="Leave types" path='/Leave' />
            <SidebarItem icon={<SquareGanttChart size={20} />} text="Reporting" path='/Report' />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
          </Sidebar>
        </div>
        <div className='w-full top-0 pl-10'>
          <Routes>
            <Route path='/' element={<DashboardPage />}></Route>

            <Route path='/application' element={<ApplicationPage />}></Route>
            <Route path='/Application/Create' element={<ApplicationCreate />}></Route>
            <Route path='/Application/Create2' element={<ApplicationCreate2 />}></Route>
            <Route path='/Application/AppUpdate' element={<ApplicationUpdate />}></Route>
            

            <Route path='/Employee' element={<EmployeePage />}></Route>
            <Route path='/Employee/Create' element={<EmployeeCreate />}></Route>
            <Route path='/Employee/Edit/:id' element={<EmployeeEdit />}></Route>

            <Route path='/Department' element={<DepartmentPage />}></Route>

            <Route path='/Leave' element={<LeavePage />}></Route>

            <Route path='/Report' element={<ReportPage />}></Route>
{/*             
            <Route path='/users/edit-user/:id' element={<UpdateUser />}></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
