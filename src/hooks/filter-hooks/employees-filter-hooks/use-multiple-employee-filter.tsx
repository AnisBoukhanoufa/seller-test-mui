import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { EnumEmployeeRole } from "statics/enums";
import { baseRequest } from "utils/request-methods";

export const useMultipleUserSelectorFilter = (
  query: object,
  setQuery: any,
  filterId: string,
  role: string | number,
  fetchForAdminOnly: boolean
) => {
  const employee = useSelector((state: any) => state.employee.currentEmployee);

  const [selectedUsers, setSelectedUsers] = useState(query?.[filterId]); // Handles multiple users
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   setSelectedUsers(query?.[filterId]);
  // }, [query?.[filterId]]);

  // Fetch users on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await baseRequest.get(
          `/employee/name-pagination?role=${role}`
        );
        setUsers(res.data.list);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };
    if (fetchForAdminOnly) {
      if (employee.role === EnumEmployeeRole.admin) fetchEmployees();
    } else {
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
    if (Object.keys(query).length === 0) {
      setSelectedUsers([]);
    }
  }, [query]);

  return {
    selectedUsers,
    setSelectedUsers,
    users,
    setUsers,
  };
};
