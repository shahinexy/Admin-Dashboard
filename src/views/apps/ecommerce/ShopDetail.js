import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
} from 'reactstrap';

import useFetchQuery from '../../../hooks/shared/useFetch';
import useDeleteMutate from '../../../hooks/shared/useDeleteMutate';

/* eslint react/prop-types: 0 */

const ShopDetail = ({ themId }) => {
  const [themeData, setThemeData] = useState([]);
  const { data, isLoading, refetch } = useFetchQuery(`/themes/${themId}`);
  const onSuccess = (id) => {
    refetch();
  }
  const {mutate, isPending} = useDeleteMutate(`/themes/`, onSuccess);
  useEffect(() => {
    if (data?.data) setThemeData(data?.data);
  }, [data]);

  const handleDelete = (id) => {
    // console.log(id)
    mutate(id);
  }

  return (
    <div>
      {/* <h1></h1> */}
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="6 ">
                  <img className='img-fluid ' src={themeData?.featuredDesktopImage} alt="desktop" width="" />
                </Col>
                <Col lg="6">
                  <Badge color="success">{themeData?.author}</Badge>
                  <h3 className="mt-2 mb-3">{themeData?.name}</h3>
                  <p className="text-muted py-3">
                    {themeData?.description}
                  </p>
                  <h2>{themeData?.price}</h2>
                  <br />
                  <h6>Categories</h6>
                  <div className="d-flex">
                    {
                      themeData?.categories?.map(item => <p key={item} className='me-3 bg-info px-3 '> {item} </p>)
                    }
                  </div>
                  <br />
                  
                  <br />
                  <br />
                  <Button color="primary" className="me-2">
                    Update
                  </Button>
                  <Button onClick={() => handleDelete(themeData.id)} color="dark">Delete</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};



export default ShopDetail;
