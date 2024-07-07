import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap';
// import ProjectTables from '../../components/dashboard/extraDashboard/ProjectTable';

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        {/* <ProjectTables /> */}
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Table with Border
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Payment Method</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#25412</th>
                  <td>John Smith</td>
                  <td>PayPal</td>
                  <td>7 jul 2024</td>
                  <td>Delivered</td>
                  <td>$110</td>
                  <td>....</td>
                </tr>
                <tr>
                  <th scope="row">#25412</th>
                  <td>John Smith</td>
                  <td>PayPal</td>
                  <td>7 jul 2024</td>
                  <td>Delivered</td>
                  <td>$110</td>
                  <td>....</td>
                </tr>
                <tr>
                  <th scope="row">#25412</th>
                  <td>John Smith</td>
                  <td>PayPal</td>
                  <td>7 jul 2024</td>
                  <td>Delivered</td>
                  <td>$110</td>
                  <td>....</td>
                </tr>
                <tr>
                  <th scope="row">#25412</th>
                  <td>John Smith</td>
                  <td>PayPal</td>
                  <td>7 jul 2024</td>
                  <td>Delivered</td>
                  <td>$110</td>
                  <td>....</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
  );
};

export default Tables;
