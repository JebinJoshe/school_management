import React from 'react'

function Registration() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <header className="bg-purple-700 text-white rounded-t-lg p-4">
          <h1 className="text-xl font-semibold">Add New Teacher</h1>
        </header>
        <form className="p-6 space-y-8">
          {/* Personal Details Section */}
          <div>
            <h2 className="text-lg font-semibold text-purple-700">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input
                  type="tel"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Phone Number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address *</label>
                <textarea
                  rows="4"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Address"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                <input
                  type="date"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Place of Birth *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Place of Birth"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Photo *</label>
                <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
                  <p className="text-sm text-gray-500">Drag and drop or click here to select a file</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-semibold text-purple-700">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">University *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="University Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Degree"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start & End Date *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Start & End Date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City *</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="City"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 text-purple-700 border border-purple-700 rounded-md hover:bg-purple-100"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Registration