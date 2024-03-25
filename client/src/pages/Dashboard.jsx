const Dashboard = () => {

    return (

        <div className="w-full h-screen">

            <div className="text-2xl font-bold text-gray-600 mt-14 p-2 ">Dashboard</div>

            {/* div stats summarization */}
            <div className="flex">
                <div className="w-1/4 rounded-xl bg-indigo-50 text-gray-600 p-4 m-4">
                    <div className="h-12">
                        logo
                    </div>
                    <div className="my-2">
                        <div className="text-4xl font-bold"><span>80</span> +</div>
                    </div>

                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">Put The Client First</p>
                    </div>
                </div>

                <div className="w-1/4 rounded-xl bg-indigo-50 text-gray-600 p-4 m-4">
                    <div className="h-12">
                        logo
                    </div>
                    <div className="my-2">
                        <div className="text-4xl font-bold"><span>80</span> +</div>
                    </div>

                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">Put The Client First</p>
                    </div>
                </div>

                <div className="w-1/4 rounded-xl bg-indigo-50 text-gray-600 p-4 m-4">
                    <div className="h-12">
                        logo
                    </div>
                    <div className="my-2">
                        <div className="text-4xl font-bold"><span>80</span> +</div>
                    </div>

                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">Put The Client First</p>
                    </div>
                </div>

                <div className="w-1/4 rounded-xl bg-indigo-50 text-gray-600 p-4 m-4">
                    <div className="h-12">
                        logo
                    </div>
                    <div className="my-2">
                        <div className="text-4xl font-bold"><span>80</span> +</div>
                    </div>

                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-500">Put The Client First</p>
                    </div>
                </div>
            </div>

            {/* table display */}
            <div class="flex items-center justify-center">
                <div class="w-full overflow-x-auto p-4">
                    <table class="w-full bg-white shadow-md rounded-xl">
                        <thead>
                            <tr class="bg-blue-gray-100 text-gray-700">
                                <th class="py-3 px-4 text-left">Request ID</th>
                                <th class="py-3 px-4 text-left">Requested by</th>
                                <th class="py-3 px-4 text-left">Leave type</th>
                                <th class="py-3 px-4 text-left">Start date</th>
                                <th class="py-3 px-4 text-left">End date</th>
                                <th class="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-blue-gray-900 ">
                            <tr class="border-b border-blue-gray-200">
                                <td class="py-3 px-4">123</td>
                                <td class="py-3 px-4">ABC</td>
                                <td class="py-3 px-4">Annual Leave</td>
                                <td class="py-3 px-4">21-03-2024</td>
                                <td class="py-3 px-4">27-03-2024</td>
                                <td class="flex gap-2 py-3 px-4">
                                <div href="#" className="font-medium text-blue-600 hover:text-blue-800">
                                            View
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div class="w-full pt-5 px-4 mb-8 mx-auto ">
                        <div class="text-sm text-gray-700 py-1 text-center">
                            Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
                        </div>
                    </div> */}
                </div>
            </div>

        </div>

    )
}

export default Dashboard;