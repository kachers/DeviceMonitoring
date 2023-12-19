import React, { useState, useEffect } from 'react';
import Device from './device';
import Head from './head';
import useDevices from '../../hooks/useDevices';

const DevicesTable: React.FC = () => {
  const { devices: allDevices, loading } = useDevices();
  const devicesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'All' | 'Online' | 'Offline'>('All');
  const [filteredDevices, setFilteredDevices] = useState(allDevices);

  useEffect(() => {
    // Update filtered devices when filter or allDevices changes
    if (filter === 'All') {
      setFilteredDevices(allDevices);
    } else {
      const filtered = allDevices.filter((device) =>
        filter === 'Online' ? device.isOnline : !device.isOnline
      );
      setFilteredDevices(filtered);
    }
  }, [filter, allDevices]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const startIndex = (currentPage - 1) * devicesPerPage;
  const endIndex = startIndex + devicesPerPage;
  const displayedDevices = filteredDevices.slice(startIndex, endIndex);

  const showNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const showPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate online and offline counts
  const onlineCount = allDevices.filter((device) => device.isOnline).length;
  const offlineCount = allDevices.filter((device) => !device.isOnline).length;

  const handleFilterChange = (newFilter: 'All' | 'Online' | 'Offline') => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset current page when changing filter
  };

  return (
    <div className='flex flex-col w-[1170px] items-start rounded-md border border-solid border-gray-300 bg-white shadow-md z-10'>
      <div className='flex py-5 justify-between items-center self-stretch'>
        <Head
          onFilterChange={handleFilterChange}
          currentFilter={filter}
          onlineCount={onlineCount}
          offlineCount={offlineCount}
        />
      </div>
      <div className='flex flex-col self-stretch p-0 px-5 pb-5 items-flex-start gap-1'>
        {displayedDevices.map((device) => (
          <Device key={device.id} device={device} />
        ))}
      </div>
      <div className='flex self-stretch p-3 pl-5 items-center gap-5 rounded-b-md bg-neutral-200'>
        {endIndex > devicesPerPage && (
          <button onClick={showPreviousPage} className='cursor-pointer font-Inter text-[14px]/[22px] font-normal text-neutral-700 tracking-[-0.205px]'>
            Previous
          </button>
        )}
        <p className='font-inter text-[14px]/[22px] font-normal text-neutral-700 tracking-[-0.205px] font-variant-ligatures-none'>
          Showing {startIndex + 1} - {Math.min(endIndex, filteredDevices.length)} of {filteredDevices.length} devices
        </p>
        {endIndex < filteredDevices.length && (
          <button onClick={showNextPage} className='cursor-pointer font-Inter text-[14px]/[22px] font-normal text-neutral-700 tracking-[-0.205px]'>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DevicesTable;