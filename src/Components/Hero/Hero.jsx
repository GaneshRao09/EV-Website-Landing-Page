import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Exlpore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
            <li className={heroCount === 0 ? 'standby active' : 'standby'} onClick={() => setHeroCount(0)}></li>
            <li className={heroCount === 1 ? 'standby active' : 'standby'} onClick={() => setHeroCount(1)}></li>
            <li className={heroCount === 2 ? 'standby active' : 'standby'} onClick={() => setHeroCount(2)}></li>
        </ul>
      
        <div className="hero-play" onClick={() => setPlayStatus(!playStatus)}>
            <img src={playStatus ? pause_icon : play_icon} alt="" />
            </div>
    </div>
    </div>
  )
}

export default Hero
