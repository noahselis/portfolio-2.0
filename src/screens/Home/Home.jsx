import './Home.scss'

import Navbar from '../../components/Navbar/Navbar'

export default function Home({}) {
  return (
    <div className="homeContainer">
      <p>home</p>
      <div className="navWrap">
        <Navbar />
      </div>
    </div>
  )
}
