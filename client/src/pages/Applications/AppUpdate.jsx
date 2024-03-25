import { FilePlus2 } from 'lucide-react'

const AppCreate = () => {
    return (
        <div className="flex p-10">
            {/* <!-- Author: FormBold Team -->
            <!-- Learn More: https://formbold.com --> */}
            <div className="w-full max-w-[600px]">
                {/* <form action="https://formbold.com/s/FORM_ID" method="POST"> */}
                <form>
                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Request ID
                                </label>
                                <input type="text" value='123' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Leave type
                                </label>
                                <input type="text" value='Annual Leave' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Name
                                </label>
                                <input type="text" value='ABC' placeholder='Name' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Surname
                                </label>
                                <input type="text" value='123' placeholder="Surname" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Department
                                </label>
                                <input type="text" value='Information Technology' placeholder='Department' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Branch
                                </label>
                                <input type="text" value='HQ' placeholder="Branch" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md"  disabled/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Start Date
                                </label>
                                <input type="date" value='2024-03-12' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    End Date
                                </label>
                                <input type="date" value='2024-03-15' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Day of leave
                                </label>
                                <input type="text" value={4} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>

                        <div className="flex w-fit items-center justify-center mx-4 my-8">
                            <div className="rounded-md border border-gray-100 bg-white p-3 shadow-md px-3s">
                                <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                    <span className="text-sky-600 font-medium">View Attach File</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Description
                                </label>
                                <input type="text" value='Vacation' placeholder='Description' className="w-full h-12 rounded-md border border-gray bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Comments
                                </label>
                                <input type="text" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-gray-700">
                                    Update Status
                                </label>
                            <select className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md">
                                <option>Approve</option>
                                <option>Reject</option>
                                <option>Cancel</option>
                            </select>
                            </div>
                        </div>
                    </div>



                    <div className="flex w-fit items-center justify-center mx-3">
                        <button className="rounded-lg bg-blue-700 py-3 px-6 mt-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-sky-600">
                            Submit
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