import React, { useEffect } from 'react';
import { Table } from 'reactstrap';

import ComponentCard from '../../components/ComponentCard';
import ProjectTables from '../../components/dashboard/extraDashboard/ProjectTable';
import useFetchQuery from '../../hooks/shared/useFetch';

const BasicTable = () => {
  const { data, error, isError, isLoading, isSuccess, refetch } = useFetchQuery('/themes',{
    page: 1, limit: 10, searchTerm:"warehouse", 
  } ,  false )
      useEffect(() => {
        if(isSuccess){
          console.log(data)
          
        }
        if(isError){
          console.log(error, "error fromn this page")
        }
      }, [isSuccess,isError,error ])
      
      
  return (
    <>

      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <ComponentCard
        title="All Themes"
        subtitle={
          <p>
            All Themes are here.
          </p>
        }
      >
        <ProjectTables />
      </ComponentCard>
    </>
  );
};

export default BasicTable;
