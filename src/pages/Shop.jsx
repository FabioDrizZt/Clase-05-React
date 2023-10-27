import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Shop({ data }) {
  return (
    <div>
      <Outlet />
      {data?.map((item) => (
        <Link to={'/shop/' + item.id}>
          <li key={item.id}>{item.title}</li>
        </Link>
      ))}
    </div>
  )
}
