import { useState } from 'react'
import axios from 'axios';

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(baseUrl);
      setResources(response.data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const create = async (newResource) => {
    try {
      const response = await axios.post(baseUrl, newResource);
      setResources([...resources, response.data]);
    } catch (error) {
      console.error('Error creating resource:', error);
    }
  };

  return {
    resources,
    getAll,
    create,
  };
};
