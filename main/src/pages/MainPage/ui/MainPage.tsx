import { FC } from 'react'
import { Link } from 'react-router-dom'
const MainPage: FC = () => {

  return (
    <div style={{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'gray'
    }}>
      <h1>Main Application</h1>
      <Link to={'/remote'}>Click</Link>
    </div>
  )
}

export default MainPage
