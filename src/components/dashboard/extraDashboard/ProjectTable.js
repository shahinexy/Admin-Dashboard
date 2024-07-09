import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useSecureApi';

// const tableData = [
//   {
//     id: 1,
//     avatar: theme1,
//     name: 'Hanna Gover',
//     email: 'hgover@gmail.com',
//     project: 'Flexy React',
//     status: 'pending',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 2,
//     avatar: theme2,
//     name: 'Jonathan Gover',
//     email: 'hgover@gmail.com',
//     project: 'Lading pro React',
//     status: 'done',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 3,
//     avatar: theme3,
//     name: 'Steave',
//     email: 'hgover@gmail.com',
//     project: 'Elite React',
//     status: 'holt',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 4,
//     avatar: theme4,
//     name: 'Mukesh chava',
//     email: 'hgover@gmail.com',
//     project: 'Flexy React',
//     status: 'pending',
//     weeks: '35',
//     budget: '95K',
//   },
//   {
//     id: 5,
//     avatar: theme5,
//     name: 'Thuklk luu',
//     email: 'hgover@gmail.com',
//     project: 'Ample React',
//     status: 'done',
//     weeks: '35',
//     budget: '95K',
//   },
// ];

const ProjectTables = () => {
  const [allTheme,setAllTheme] = useState([]);
  const secureApi = useAxiosSecure();

  useEffect(() => {
    secureApi('/themes').then((res) => {
      // console.log(res.data.data);
      setAllTheme(res.data.data);
    });
  }, []);
  console.log(allTheme);

  return (
    <div>
      <Table className="no-wrap align-middle" responsive borderless>
        <thead>
          <tr>
            <th className="px-4">Image</th>
            <th className="px-4">Author Name</th>
            {/* <th className="px-4">Email</th> */}
            <th className="px-4">Price</th>
            <th className="px-4">Review</th>
          </tr>
        </thead>
        <tbody>
          {allTheme.map((theme) => (
            <tr key={theme?.id} className="border-top">
              <Link to={`/theme/details/${theme?.id}`}>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={theme?.featuredDesktopImage}
                      className="rounded-4"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0 fw-medium">{theme?.name}</h5>
                      <span className="text-muted">{theme?.email}</span>
                    </div>
                  </div>
                </td>
              </Link>
              <td>{theme?.author}</td>
              <td>{theme?.price}</td>
              <td>{theme?.review?.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectTables;
