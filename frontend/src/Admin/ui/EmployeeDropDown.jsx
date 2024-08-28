import SpinnerMini from "../../Common/Ui/SpinnerMini";
import { useAllEmployee } from "../components/settings/useAllEmployee";

/* eslint-disable react/prop-types */
const EmployeeDropdown = ({ selectedOption, setSelectedOption }) => {
  const { isLoading: loadingAllEmployee, allEmployee } = useAllEmployee();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (loadingAllEmployee) return <SpinnerMini />;

  return (
    <div className="w-full ">
      <select
        className="w-full border p-2 rounded shadow"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select A Employee</option>
        {allEmployee.map((employee) => (
          <option key={employee.empId} value={employee.empId}>
            {employee.employeeName} ({employee.empId})
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeDropdown;
