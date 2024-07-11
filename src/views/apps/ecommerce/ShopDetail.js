import Swal from 'sweetalert2';
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
import ThemeUpdateModal from '../../../components/dashboard/themeModal/ThemeUpdateModal';

/* eslint react/prop-types: 0 */

const ShopDetail = ({ themId }) => {
  const [themeData, setThemeData] = useState([]);
  // get hook
  const { data, isLoading, refetch } = useFetchQuery(`/themes/${themId}`);

  // delete hook
  const onSuccess = (id) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    refetch();
  }
  const {mutate, isPending} = useDeleteMutate(`/themes/`, onSuccess);
  useEffect(() => {
    if (data?.data) setThemeData(data?.data);
  }, [data]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
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
                  <h2>{themeData?.price}$</h2>
                  <br />
                  <h6>Include Support:</h6>
                  <ul >
                    {
                      themeData?.includeSupport?.map(item => <li key={item} > {item} </li>)
                    }
                  </ul>
                  <br />
                  <h6>Categories:</h6>
                  <div className="d-flex">
                    {
                      themeData?.categories?.map(item => <p key={item} className='me-3 bg-info px-3 '> {item} </p>)
                    }
                  </div>
                  <br />
                  
                  <div className='d-flex '>
                  <ThemeUpdateModal themeData={themeData} refetch={refetch} />
                  <Button onClick={() => handleDelete(themeData.id)} color="dark" className="ms-3">Delete</Button>
                  </div>
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
