const DeptView = () => {

    return (

        <div>
            <div className="text-2xl font-bold mt-14 p-2">Departments</div>

            <div className="flex items-center justify-center p-4 m-4">
                <div className="w-full overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-xl">
                        <thead>
                            <tr className="bg-blue-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left">Request ID</th>
                                <th className="py-3 px-4 text-left">Requested by</th>
                                <th className="py-3 px-4 text-left">Leave type</th>
                                <th className="py-3 px-4 text-left">Start date</th>
                                <th className="py-3 px-4 text-left">End date</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-blue-gray-900 ">
                            <tr className="border-b border-blue-gray-200">
                                <td className="py-3 px-4">123</td>
                                <td className="py-3 px-4">ABC</td>
                                <td className="py-3 px-4">Annual Leave</td>
                                <td className="py-3 px-4">21-03-2024</td>
                                <td className="py-3 px-4">27-03-2024</td>
                                <td className="flex gap-2 py-3 px-4">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Approve</a>

                                </td>
                            </tr>
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

export default DeptView;