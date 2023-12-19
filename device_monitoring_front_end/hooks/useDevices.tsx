import { useEffect, useState } from 'react';

interface Device {
    id: number; 
    Name: string;
    Model: string;
    Location: string;
    ConStat: string;
    IsOnline: boolean;
  }

const useDevices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/Devices/Get');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setDevices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { devices, loading };
};

export default useDevices;