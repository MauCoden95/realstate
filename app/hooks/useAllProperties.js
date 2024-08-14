import { useEffect, useState } from 'react';

const useAllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const authorization = process.env.NEXT_PUBLIC_AUTHORIZATION;

    const response = await fetch(
      "https://ggvktlgwmfhumvfhiliw.supabase.co/rest/v1/Properties?select=*",
      {
        method: "GET",
        headers: {
          apiKey: apiKey,
          authorization: authorization,
        },
      }
    );
    const data = await response.json();

    setProperties(data);
  }

  return properties;
}

export default useAllProperties;
