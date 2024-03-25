import { useState, useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { listSingleUser } from '../../api/employees'

const AppCreate = () => {

    const param = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({
        empID: '',
        empName: '',
        empSurname: '',
        empBranch: '',
        empDepartment: '',
    })

    const empID = useRef()
    const empName = useRef()
    const empSurname = useRef()
    const empBranch = useRef()
    const empDepartment = useRef()

    useEffect(() => {

        loadData(param.id)

    }, [])

    const loadData = async (id) => {
        listSingleUser(id)
            .then((res) => setData(res.data.data[0]))
            .catch((err) => console.log(err))
    }

    console.log(data)


    return (
        <div className="flex p-16">
            {/* <!-- Author: FormBold Team -->
            <!-- Learn More: https://formbold.com --> */}
            <div className="w-full max-w-[600px]">
                {/* <form action="https://formbold.com/s/FORM_ID" method="POST"> */}
                <form>
                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Employee ID
                                </label>
                                <input type="text" placeholder='Employee ID' value={data.emp_id} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Name
                                </label>
                                <input type="text" placeholder="First Name" value={data.emp_name} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Surname
                                </label>
                                <input type="text" placeholder="Last Name" value={data.emp_surname} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Branch
                                </label>
                                <input type="text" placeholder="Branch" value={data.br_id} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Department
                                </label>
                                <input type="text" placeholder="Department" value={data.dept_id} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Status
                                </label>
                                <select className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md">
                                    <option>Active</option>
                                    <option>Disable</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-fit items-center justify-center mx-3">
                        <button className="rounded-lg bg-blue-700 py-3 px-6 mt-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-sky-600">
                            Save
                        </button>
                    </div>

                    <div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default AppCreate;