import { useEffect, useState } from 'react';

const useProperty = ({propertyId}) => {
    const [property, setProperty] = useState({});

    useEffect(() => {
       fetchData();
    }, []);

 

    const fetchData = async () => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const authorization = process.env.NEXT_PUBLIC_AUTHORIZATION;
    
        const response = await fetch(
          `https://ggvktlgwmfhumvfhiliw.supabase.co/rest/v1/Properties?id=eq.${propertyId}&select=*`,
          {
            method: "GET",
            headers: {
              apiKey: apiKey,
              authorization: authorization,
            },
          }
        );
        const data = await response.json();

       
       
        setProperty(data[0]);
      }

      return property;
}

export default useProperty;