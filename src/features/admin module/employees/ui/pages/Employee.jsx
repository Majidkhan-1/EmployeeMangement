import { useState } from 'react'

import useEmployee from '../../hook/useEmployee'
import EmployeeHeader from '../components/employees/EmployeeHeader';
import EmployeeStats from '../components/employees/EmployeeStats';
import SearchFilterBar from '../components/employees/SearchFilterBar';
import EmployeeTable from '../components/employees/EmployeeTable';
import Pagination from '../components/employees/Pagination';
import { Outlet } from 'react-router';

const Employee = () => {
  const { data, isPending, updateEmployee,handlePageChange,filters,handleSearchFilter } = useEmployee();
  // console.log("pagination data",data)
  // const [filters, setFilters] = useState({
  //   search: '',
  //   role: '',
  //   department: '',
  //   status: '',
  // });

  if(isPending) return <h1>Employee Loading....</h1>

  const employees = data?.employees ?? [];
  const filteredEmployees = employees.filter((employee) => {
    const search = filters.search.trim().toLowerCase();
    const matchesSearch = !search ||
      [employee.name, employee.email].some((value) =>
        value?.toLowerCase().includes(search)
      );

    return matchesSearch &&
      (!filters.role || employee.role === filters.role) &&
      (!filters.department || employee.department === filters.department) &&
      (!filters.status || employee.status === filters.status);
  });

  return (
  
    <div className="min-h-screen bg-[var(--bg-main)] p-8">
        <div className=" mx-auto">
            {/* HEADER */}
              <Outlet/>
            <EmployeeHeader />

            {/* STATS */}
            <EmployeeStats employees={employees} />

            {/* TABLE SECTION */}
            <div className="mt-8 bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <SearchFilterBar
                    filters={filters}
                    handleSearchFilters={handleSearchFilter}
                  />
                     
                    

                <EmployeeTable
                    employees={filteredEmployees}
                    onUpdateEmployee={updateEmployee}
                />

                <Pagination 
                pagination={data?.pagination}
                onPageChange={handlePageChange}/>

            </div>
        </div>
    </div>
  );
}

export default Employee