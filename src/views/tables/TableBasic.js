import React from 'react';
import { Table } from 'reactstrap';

import ComponentCard from '../../components/ComponentCard';
import ProjectTables from '../../components/dashboard/extraDashboard/ProjectTable';

const BasicTable = () => {
  return (
    <>

      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <ComponentCard
        title="All Product"
        subtitle={
          <p>
            All products are here.
          </p>
        }
      >
        <ProjectTables />
      </ComponentCard>
    </>
  );
};

export default BasicTable;
