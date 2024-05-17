import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import axios from 'axios'; // Assuming you're using Axios for API requests

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={fetchData}>
        <Text>Fetch Data</Text>
      </TouchableOpacity>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data && <Text>Data: {JSON.stringify(data)}</Text>}
    </View>
  );
};

export default MyComponent;
