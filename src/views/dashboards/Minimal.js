import { Row, Col } from 'reactstrap';
import RevenueCards from '../../components/dashboard/minimalDashboard/RevenueCards';


const Minimal = () => {
  return (
    <>
      {/*********************Sales Overview ************************/}
      <Row>
        <Col lg="12">
          <RevenueCards />
        </Col>
        {/* <Col lg="8">
            <YearlySales />
        </Col>
        <Col lg="4">
            <WeatherCard />
            <ReviewCard />
        </Col>
        <Col lg="6">
          <RecentComments />
        </Col>
        <Col lg="6">
          <SalesOverview />
        </Col>
        <Col lg="8">
          <SalesDifference />
        </Col>
        <Col lg="4">
          <Sales />
          <VisitStatistics />
        </Col>
        
        <Col lg="4" className='d-flex align-items-stretch'>
          <TodoList />
        </Col>
        <Col lg="4" className='d-flex align-items-stretch'>
          <Messages />
        </Col>
        <Col lg="4" className='d-flex align-items-stretch'>
          <Chat />
        </Col> */}
      </Row>
      
    </>
  );
};

export default Minimal;
