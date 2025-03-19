import './App.css'

import styles from './Components/styles.module.css'
import ExitEnter from './Components/ExitEnter'
import { DraggableList } from './Components/DragList'
import UseSpring from './Components/UseSpring'
import UseTransition from './Components/UseTransition'
import TrailT from './Components/TrialTwo'
import TrialThr from './Components/TrialThree'

function App() {

  return (
    <div className='wholeContent'>
      <div className='trialTwo'>
        <TrailT />
      </div>
      <div className='trialThree'>
        <TrialThr />
      </div>
      <div className={styles.container}>
        <UseTransition />
        <ExitEnter />
      </div>
      <div className={styles.container}>
        <UseSpring />
        <DraggableList items={'Mars Venus Earth Mercury Saturn Uranus Neptune'.split(' ')} />
      </div>    
    </div>
  )
}

export default App

