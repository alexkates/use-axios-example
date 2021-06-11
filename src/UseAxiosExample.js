import useAxios from 'axios-hooks'

export default function UseAxiosExample() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <h1>Use Axios Example</h1>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}