import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { baseRequest } from "utils/request-methods";

export const useUserSelectorFilter = (
  query: object,
  setQuery: any,
  filterId: string,
  role: string | number,
  listRolesToFetch: any,
  resetValue = 0
) => {
  const employee = useSelector((state: any) => state.employee.currentEmployee);

  const [choosenUser, setChoosenUser] = useState({ _id: "" });
  const [users, setUsers] = useState([]);

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
    if (listRolesToFetch.includes(employee.role)) {
      fetchEmployees();
    }
  }, []);

  //
  const handleAutocompleteChange = useCallback((id, value) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (value) {
        newQuery[id] = value.label ? value.value : value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  // Update statusCreatorId when employee is selected
  useEffect(() => {
    handleAutocompleteChange(filterId, choosenUser._id);
  }, [choosenUser._id, filterId, handleAutocompleteChange]);

  // Reset choosen employee when query is empty
  useEffect(() => {
    if (Object.keys(query).length === resetValue) {
      setChoosenUser({ _id: "" });
    }
  }, [query]);

  return {
    choosenUser,
    setChoosenUser,
    users,
    setUsers,
  };
};
