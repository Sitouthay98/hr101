import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { listAllUser } from '../../api/employees'

const EmpView = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        loadUsers()

    }, [])

    const loadUsers = () => {
        listAllUser()
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.log(err))
    }

    console.log(users)

    return (

        <div>
            <div className="text-2xl font-bold mt-14 p-2">Employee</div>

            <div className="m-2">
                <NavLink to='/Employee/Create' className="rounded-lg bg-blue-700 py-3 px-6 mt-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-sky-600">
                    New Employee
                </NavLink>
            </div>

            <div className="flex items-center justify-center my-4 mx-2">
                <div className="w-full overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-xl">
                        <thead>
                            <tr className="bg-blue-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left">Employee ID</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Surname</th>
                                <th className="py-3 px-4 text-left">Gender</th>
                                <th className="py-3 px-4 text-left">Branch</th>
                                <th className="py-3 px-4 text-left">Department</th>
                                <th className="py-3 px-4 text-left">Join date</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-blue-gray-900 ">
                            {
                                users.map((user, index) =>
                                    <tr key={index} className="border-b border-blue-gray-200">
                                        <td className="py-3 px-4">{user.emp_id}</td>
                                        <td className="py-3 px-4">{user.emp_name}</td>
                                        <td className="py-3 px-4">{user.emp_surname}</td>
                                        <td className="py-3 px-4">{user.emp_gender}</td>
                                        <td className="py-3 px-4">{user.br_id}</td>
                                        <td className="py-3 px-4">{user.dept_id}</td>
                                        <td className="py-3 px-4">{user.emp_jdate}</td>
                                        <td className="py-3 px-4">{user.emp_status}</td>
                                        <td className="flex gap-2 py-3 px-4">
                                            <div href="#" className="font-medium text-blue-600 hover:text-blue-800">
                                                <NavLink to={'/Employee/Edit/' + user.emp_id} >  
                                                    View
                                                </NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    {/* <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                        <div className="text-sm text-gray-700 py-1 text-center">
                            Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default EmpView;