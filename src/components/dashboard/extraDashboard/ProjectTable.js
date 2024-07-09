import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import user1 from '../../../assets/images/users/user1.jpg';
import user2 from '../../../assets/images/users/user2.jpg';
import user3 from '../../../assets/images/users/user3.jpg';
import user4 from '../../../assets/images/users/user4.jpg';
import user5 from '../../../assets/images/users/user5.jpg';
import useAxiosSecure from '../../../hooks/useSecureApi';

// const tableData = [
//   {
//     id: 1,
//     avatar: user1,
//     name: 'Hanna Gover',
//     email: 'hgover@gmail.com',
//     project: 'Flexy React',
//     status: 'pending',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 2,
//     avatar: user2,
//     name: 'Jonathan Gover',
//     email: 'hgover@gmail.com',
//     project: 'Lading pro React',
//     status: 'done',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 3,
//     avatar: user3,
//     name: 'Steave',
//     email: 'hgover@gmail.com',
//     project: 'Elite React',
//     status: 'holt',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 4,
//     avatar: user4,
//     name: 'Mukesh chava',
//     email: 'hgover@gmail.com',
//     project: 'Flexy React',
//     status: 'pending',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 5,
//     avatar: user5,
//     name: 'Thuklk luu',
//     email: 'hgover@gmail.com',
//     project: 'Ample React',
//     status: 'done',
//     weeks: '35',
//     budget: '95K',
//   },
// ];

const ProjectTables = () => {
  const [users,setUsers] = useState([]);
  const secureApi = useAxiosSecure();

  useEffect(() => {
    secureApi('/users').then((res) => {
      // console.log(res.data.data);
      setUsers(res.data.data);
    });
  }, []);
  console.log(users);

  return (
    <div>
      <Table className="no-wrap align-middle" responsive borderless>
        <thead>
          <tr>
            <th className="px-4">Image</th>
            <th className="px-4">Name</th>

            <th className="px-4">Price</th>
            <th className="px-4">Review</th>
            <th className="px-4">Total Sale</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id} className="border-top">
              <Link to={`/theme/details/${user?.id}`}>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={user?.imageUrl}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0 fw-medium">{user?.name}</h5>
                      <span className="text-muted">{user?.email}</span>
                    </div>
                  </div>
                </td>
              </Link>
              <td>{user?.project}</td>
              {/* <td>
                {user?.status === 'pending' ? (
                  <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                ) : user.status === 'admin' ? (
                  <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />
                ) : (
                  <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                )}
              </td> */}
              {/* <td>{tdata.weeks}</td>
              <td>{tdata.budget}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectTables;
