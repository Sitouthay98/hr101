import { FilePlus2 } from 'lucide-react'

const AppCreate = () => {
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
                                <input type="text" value='BIC-186' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" disabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Name
                                </label>
                                <input type="text" placeholder='Name' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md"  />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Surname
                                </label>
                                <input type="text" placeholder="Surname" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Department
                                </label>
                                <input type="text" placeholder='Department' className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md"  />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Branch
                                </label>
                                <input type="text" placeholder="Branch" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Start Date
                                </label>
                                <input type="date" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    End Date
                                </label>
                                <input type="date" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Day of leave
                                </label>
                                <input type="text" value={6} className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </div>
                        </div>

                        <div className="flex w-fit items-center justify-center mx-3">
                            <div className="rounded-md border border-gray-100 bg-white p-4 shadow-md px-3s">
                                <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                    <FilePlus2 size={40} />
                                    <span className="text-gray-600 font-medium">Attach PDF</span>
                                </label>
                                <input id="upload" type="file" className="hidden" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex w-fit items-center justify-center mx-3">
                        <div className="rounded-md border border-gray-100 bg-white p-4 shadow-md px-3s">
                            <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
                                <FilePlus2 size={40} />
                                <span className="text-gray-600 font-medium">Attach PDF</span>
                            </label>
                            <input id="upload" type="file" className="hidden" />
                        </div>
                    </div> */}

                    <div className="flex flex-wrap">
                        <div className="w-full px-3">
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-gray-700">
                                    Description
                                </label>
                                <input type="text" placeholder='Description' className="w-full h-12 rounded-md border border-gray bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
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