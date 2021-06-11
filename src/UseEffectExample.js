import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UseEffectExample() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const refetchUsingAxios = async () => {
    setLoading(true);
    setError('');
    setData([]);
    return axios.get('https://reqres.in/api/users?delay=1')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message))
  };

  useEffect(() => {
    refetchUsingAxios();
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <h1>Use Effect Example</h1>
      <button onClick={refetchUsingAxios}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}