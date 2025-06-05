import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { baseRequest } from "utils/request-methods";

export const useMultipleUserSelectorFilter = (
  query: object,
  setQuery: any,
  filterId: string,
  role: string | number,
  listRolesToFetch: number[]
) => {
  const [searchParams] = useSearchParams();
  const employee = useSelector((state: any) => state.employee.currentEmployee);

  const [selectedUsers, setSelectedUsers] = useState([]); // Handles multiple users
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    const searchVal = searchParams.get(filterId);
    const fetchEmployees = async () => {
      try {
        if (searchVal) {
          const res = await baseRequest.get(
            `/employee/name-pagination?role=${role}&ids=${searchVal}`
          );
          setUsers(res.data.list);
          //when backend filter width ids change this to setSelectedUsers(res.data.list)
          const idsList = searchVal.includes(",")
            ? searchVal.split(",")
            : [searchVal];
          const selectedUsersValues = res.data.list.filter((element) =>
            idsList.includes(element._id)
          );
          setSelectedUsers(selectedUsersValues);
        } else {
          const res = await baseRequest.get(
            `/employee/name-pagination?role=${role}`
          );
          setUsers(res.data.list);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };

    if (listRolesToFetch.includes(employee.role)) {
      fetchEmployees();
    }
  }, []);

  //handle initial value

  //
  const handleAutocompleteChange = useCallback((id, values) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (values && values.length > 0) {
        newQuery[id] = values.map((value) => {
          return value._id ? value._id : value;
        });
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  // Update query filterId when users are selected

  useEffect(() => {
    handleAutocompleteChange(filterId, selectedUsers);
  }, [selectedUsers?.length, filterId, handleAutocompleteChange]);

  // Reset selected users when query is empty
  useEffect(() => {
    if (!query?.[filterId]) {
      setSelectedUsers([]);
    }
  }, [query?.[filterId]]);

  return {
    selectedUsers,
    setSelectedUsers,
    users,
    setUsers,
  };
};
