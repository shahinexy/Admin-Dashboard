import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useSecureApi';

const ProjectTables = () => {
  const [allTheme, setAllTheme] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const secureApi = useAxiosSecure();

  const fetchThemes = () => {
    secureApi(`/themes?page=${page}&limit=${limit}`).then((res) => {
      setAllTheme(res.data.data);
    });
  };

  useEffect(() => {
    fetchThemes();
  }, [page, limit]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10)); // Specify base 10
    setPage(1); // Reset to first page on limit change
  };

  return (
    <div>
      <Table className="no-wrap align-middle" responsive borderless>
        <thead>
          <tr>
            <th className="px-4">Theme</th>
            <th className="px-4">Description</th>

            <th className="px-4">Image</th>
            <th className="px-4">Author Name</th>
            <th className="px-4">Price</th>
            <th className="px-4">Review</th>
            <th className="px-4">Total Sale</th>
          </tr>
        </thead>
        <tbody>
          {allTheme.map((theme) => (
            <tr key={theme?.id} className="border-top">
              <Link to={`/theme/details/${theme?.id}`}>
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
                      <h5 className="mb-0 fw-medium">{theme?.name}</h5>
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
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between mt-4 gap-4">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Previous
          </button>
          <span className="mt-2">Page {page}</span>
          <button type="button" onClick={handleNextPage} className="px-4 py-2 bg-gray-300 rounded">
            Next
          </button>
        </div>
        <div className="mt-4">
          <label htmlFor="limit" className="mr-2">
            Items per page:
            <select
              id="limit"
              value={limit}
              onChange={handleLimitChange}
              className="px-4 py-2 bg-gray-300 rounded ml-2"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProjectTables;
