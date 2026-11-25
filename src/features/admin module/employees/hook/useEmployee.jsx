import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllEmployee, updateEmployee } from '../api/employeeApi'
import { useState } from 'react';

const useEmployee = () => {
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);

    const [filters, setFilter] = useState({
      search:"",
      status:"",
      role:"",
      department:""
    })
    console.log(filters)

    const { data, isPending } = useQuery(
        {
            queryKey:['employee',page],
            queryFn:()=>{
             return getAllEmployee({
                page,
                limit:20,
                role:filters.role,
                status:filters.status,
                department:filters.department,
                search:filters.search,
              })
            },
            staleTime:9000,
            keepPreviousData:true,
        }
    );

    

  const employeeMutation = useMutation({
    mutationFn: ({ employeeId, employeeData }) =>
      updateEmployee(employeeId, employeeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employee'] });
    },
  });

    const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);

  };

  const handleSearchFilter = (name,val)=>{
      setFilter({...filters,[name]:val})
  }

  return {
    data,
    isPending,
    updateEmployee: employeeMutation.mutateAsync,
    isUpdatingEmployee: employeeMutation.isPending,
    updateEmployeeError: employeeMutation.error,
    handlePageChange,
    handleSearchFilter,
    filters
  }
}

export default useEmployee