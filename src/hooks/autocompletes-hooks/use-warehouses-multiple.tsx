import { useState, useEffect } from "react";
import { baseRequest } from "utils/request-methods";

const useWarehouseMultiple = (query) => {
  const [warehouses, setWarehouses] = useState([]);
  const [warehouseFilter, setWarehouseFilter] = useState(
    query?.warehouseId || [],
  );

  // Fetch warehouse list on component mount or role change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseRequest.get(`/warehouse/name-pagination`);
        setWarehouses(res.data.list);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
        setWarehouses([]);
      }
    };

    fetchData();
  }, [query.role]);

  return {
    warehouses,
    setWarehouses,
    warehouseFilter,
    setWarehouseFilter,
  };
};

export default useWarehouseMultiple;
