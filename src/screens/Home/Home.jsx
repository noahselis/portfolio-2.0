import './Home.scss'

//component imports
import Navbar from '../../components/Navbar/Navbar'

//svg imports
import { ReactComponent as LogoDark } from '../../assets/logo-dark.svg'
import { ReactComponent as LogoLight } from '../../assets/logo-light.svg'
import { ReactComponent as HeroImg } from '../../assets/hero-img.svg'

export default function Home({}) {
  return (
    <div className="homeContainer">
      <div className="logoWrap">
        <LogoDark />
      </div>
      <div className="picWrap">
        <HeroImg />
      </div>
      <div className="navWrap">
        <Navbar />
      </div>
    </div>
  )
}
