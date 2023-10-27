import { useParams } from 'react-router-dom'
export default function Card({ data }) {
  const params = useParams()
  let result = data?.find((item) => item.id === params.id)
  console.log(result);
  
  return (
    <div>
      <h2>{result?.title}</h2>
      <img src={result?.thumbnail} alt="" />
    </div>
  )
}
