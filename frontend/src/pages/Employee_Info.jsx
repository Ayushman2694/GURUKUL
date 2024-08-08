import { employeInfo } from "../services/employe_info";

employeInfo();

export default function EmployeeInfo() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold px-1">Employee Information</h1>
        </div>
        <div className=" md:flex w-full py-4">
          <div className="w-full md:w-1/2 border m-1 rounded-sm bg-slate-50 drop-shadow-xl py-2">
            <h3 className="font-semibold p-2 text-lg">Basic Information</h3>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Employee Id:</div>
              <div className="w-1/2 flex justify-end">E123456</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Name:</div>
              <div className="w-1/2 flex justify-end">John Smith</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Department:</div>
              <div className="w-1/2 flex justify-end">John Smith</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Designation:</div>
              <div className="w-1/2 flex justify-end">Data 1analyst</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Joining Date:</div>
              <div className="w-1/2 flex justify-end">01 Jan 2020</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Reporting Manager:</div>
              <div className="w-1/2 flex justify-end">Jane Doe</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-2 m-1 rounded-sm bg-slate-50 drop-shadow-xl">
            <h3 className="font-semibold p-2 text-lg">Assigned Courses</h3>
          </div>
        </div>
        <div className="w-full border m-1 rounded-sm bg-slate-50 drop-shadow-xl py-2">
          <h3 className="font-semibold px-2 text-lg">Certificates</h3>
        </div>
      </div>
    </div>
  );
}
