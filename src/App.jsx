import './App.css'

import styles from './Components/styles.module.css'
import ExitEnter from './Components/ExitEnter'
import { DraggableList } from './Components/DragList'
import UseSpring from './Components/UseSpring'
import UseTransition from './Components/UseTransition'
import TrailT from './Components/TrialTwo'
import TrialThr from './Components/TrialThree'
import Trial from './Components/Trail'

function App() {

  return (
    <div className='wholeContent'>
        <TrailT />
        <TrialThr />
        <Trial />
    
      <div className='useTransition'>
        <UseTransition />
        <ExitEnter />
      </div>
      <div className='useSpring'>
        <UseSpring />
        <DraggableList items={'Mars Venus Earth Mercury Saturn Uranus Neptune'.split(' ')} />
      </div>      
    </div>
  )
}

export default App

