
import { Link } from 'react-router-dom';
import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap';
// import ProjectTables from '../../components/dashboard/extraDashboard/ProjectTable';

const Tables = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Order List
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
                {arr.map((idx) => (
                  <tr key={idx}>
                  <th scope="row">#25412</th>
                  <td>John Smith</td>
                  <td>PayPal</td>
                  <td>7 jul 2024</td>
                  <td>Delivered</td>
                  <td>$110</td>
                  <td><Link to={`/${idx}`} className="btn btn-primary" type="submit">Edit</Link></td>
                </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
