import { useEffect, useState } from "react";

const useTourServices = () => {
  const [services, setServices] = useState([]);
  const [totalServices, setTotalServices] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 6;
  useEffect(() => {
    fetch(
      `https://haunted-phantom-42348.herokuapp.com/services?size=${size}&&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        const totalData = data.count;
        const pages = Math.ceil(totalData / size);
        setTotalPages(pages);
        setTotalServices(data.count);
      });
  }, [currentPage]);
  return {
    services,
    totalServices,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default useTourServices;
