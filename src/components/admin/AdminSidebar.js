import React from "react";

const AdminSidebar = ({navic, page}) => {

    const arryay = ['🏠 Dashboard', '💳 Payment Info', '📝 Registration', '📚 Courses', '📊 Result', '🔔 Notification', '🗓 Schedule', '🔒 Logout' ]
  return (
    <div className=" h-screen w-80 bg-violet-600 text-white">
      <div className="sidebar-header text-center py-4 text-2xl font-bold border-b-2 border-gray-600">
        🎓 Admin Panel
      </div>
      {arryay.map((item, index) => (
        <ul key={index} className="sidebar-menu mt-6 space-y-2">
          <li
            onClick={() => {
              if(item !== "🔒 Logout") navic(item);
            }}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              item === page ? "bg-gray-700" : null
            } ${
              item === "🔒 Logout" ? "hover:bg-red-600" : "hover:bg-gray-700"
            }`}
          >
            {item}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AdminSidebar;
