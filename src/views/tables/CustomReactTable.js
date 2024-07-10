import React, { useState, useEffect } from 'react';
import 'react-table-v6/react-table.css';
import useFetchQuery from '../../hooks/shared/useFetch';

const CustomReactTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isSuccess, isLoading, refetch } = useFetchQuery('/users', {
    page,
    limit,
  });

  useEffect(() => {
    refetch(); // Refetch data when page or limit changes
  }, [page, limit, refetch]);

  useEffect(() => {
    if (isSuccess && data?.data) {
      setUsers(data.data);
    }
  }, [data, isSuccess]);

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
      <div className="">
        <table className="table table-bordered">
          <thead>
            <tr className="text-black">
              <th className="">Image</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr className="hover:bg-gray-50 transition duration-300" key={user?.id}>
                <td>
                  <img
                    src={user?.imageUrl}
                    className="rounded-4"
                    alt="avatar"
                    width="45"
                    height="45"
                  />
                </td>
                <td className="py-4 px-6 border-b">{user?.name}</td>
                <td className="py-4 px-6 border-b">{user?.email}</td>
                <td className="py-4 px-6 border-b">{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-between'>
          <div className="d-flex justify-content-between mt-4 gap-4">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>
            <span className='mt-2'>Page {page}</span>
            <button
              type="button"
              onClick={handleNextPage}
              className="px-4 py-2 bg-gray-300 rounded"
            >
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
    </div>
  );
};

export default CustomReactTable;
