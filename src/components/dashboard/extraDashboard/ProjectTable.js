import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import user1 from '../../../assets/images/users/user1.jpg';
import user2 from '../../../assets/images/users/user2.jpg';
import user3 from '../../../assets/images/users/user3.jpg';
import user4 from '../../../assets/images/users/user4.jpg';
import user5 from '../../../assets/images/users/user5.jpg';
import useFetchQuery from '../../../hooks/shared/useFetch';


const tableData = [
  {
    id:1,
    avatar: user1,
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    id:2,
    avatar: user2,
    name: 'Jonathan Gover',
    email: 'hgover@gmail.com',
    project: 'Lading pro React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
  {
    id:3,
    avatar: user3,
    name: 'Steave',
    email: 'hgover@gmail.com',
    project: 'Elite React',
    status: 'holt',
    weeks: '35',
    budget: '95K',
  },
  {
    id:4,
    avatar: user4,
    name: 'Mukesh chava',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    id:5,
    avatar: user5,
    name: 'Thuklk luu',
    email: 'hgover@gmail.com',
    project: 'Ample React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
];

const ProjectTables = () => {
  const {data, isLoading, } = useFetchQuery('/themes?limit=10')
  // console.log(data?.data)
  return (
    <div>
      <Table className="no-wrap align-middle" responsive borderless>
        <thead>
          <tr>
            <th className="px-4">Theme</th>
            <th className="px-4">Description</th>

            <th className="px-4">Price</th>
            <th className="px-4">Total Sale</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((tdata) => (
            <tr key={tdata.id} className="border-top">
              <Link to={`/theme/details/${tdata.id}`}>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={tdata.featuredDesktopImage}
                      alt="avatar"
                      width="100"
                      height="80"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0 fw-medium">{tdata?.name}</h5>
                      <span className="text-muted">{tdata?.author}</span>
                    </div>
                  </div>
                </td>
              </Link>
              <td>
                {tdata?.description.slice(0, 60)}...
              </td>
              <td>{tdata?.price}</td>
              <td>20</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectTables;
