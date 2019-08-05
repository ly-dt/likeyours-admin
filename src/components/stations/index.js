import React, { useEffect } from 'react';
import { StationsRepo } from '../../repository';

const Stations = () => {
  const fetchData = async () => {
    try {
      const response = await StationsRepo.getStations();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div />;
};

export default Stations;
