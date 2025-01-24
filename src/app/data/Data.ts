import axios from "axios";

const Data = async () => {
  try {
    const response = await axios.get('/api'); // Adjust endpoint to match your API
    return response.data.data; // Extract 'data' array from the response body
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array as a fallback
  }
};

export default Data;
