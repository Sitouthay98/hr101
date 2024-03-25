const AppCreate2 = () => {

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center px-4">

                <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
                    <div className="p-4 border-b">
                        <h2 className="text-2xl ">
                            Applicant Information
                        </h2>
                        <p className="text-sm text-gray-500">
                            Leave detail 
                        </p>
                    </div>
                    <div>
                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                Employee ID
                            </p>
                            <p>
                                BIC-001
                            </p>
                        </div>
                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                Request by
                            </p>
                            <p>
                                ABC
                            </p>
                        </div>
                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                Department
                            </p>
                            <p>
                                Information Technology
                            </p>
                        </div>
                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                Start Date
                            </p>
                            <p>
                            <input type="date" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </p>
                        </div>

                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                End Date
                            </p>
                            <p>
                            <input type="date" className="w-full rounded-md border border-gray bg-white py-3 px-6    font-medium text-gray-700 outline-none focus:border-blue-700 focus:shadow-md" />
                            </p>
                        </div>

                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                            <p className="text-gray-600">
                                Description
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero culpa excepturi nostrum et, unde fuga, voluptatum doloribus laboriosam tempore, inventore tempora iste quas aliquid quam at officiis fugiat? Dolores.
                            </p>
                        </div>
                        <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                            <p className="text-gray-600">
                                Attachments
                            </p>
                            <div className="space-y-2">
                                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                                    <div className="space-x-2 truncate">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" /></svg>
                                        <span>
                                            resume_for_manager.pdf
                                        </span>
                                    </div>
                                    <a href="#" className="text-purple-700 hover:underline">
                                        Download
                                    </a>
                                </div>

                                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                                    <div className="space-x-2 truncate">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current inline text-gray-500" width="24" height="24" viewBox="0 0 24 24"><path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" /></svg>
                                        <span>
                                            resume_for_manager.pdf
                                        </span>
                                    </div>
                                    <a href="#" className="text-purple-700 hover:underline">
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <a href="https://www.buymeacoffee.com/danimai" target="_blank" className="bg-purple-600 p-2 rounded-lg text-white fixed right-0 bottom-0">
                    Support me
                </a>
            </div>
        </div>
    )
}

export default AppCreate2;