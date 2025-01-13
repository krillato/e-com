"use client";
import { serviceGetDetail } from "@/services/Content";
import { useEffect, useState } from "react";

// Define the type for each item in the data array
interface DataItem {
  content: string;
}

const RedisPage = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await serviceGetDetail("");
      console.log("Work:", response);
      setData(response);
      setLoading(!loading);
    } catch (error) {
      console.error("Error fetching detail:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Redis Cache Example</h1>
      <p>Source: {data[0]?.content}</p>
      {/* <pre>{JSON.stringify(data?.data, null, 2)}</pre> */}
    </div>
  );
};

export default RedisPage;
