// lesson 20 8:40 / 11:39
// shows the difference between modular & regular stylesheets
import React from 'react'
import '../appStyles.css';                    // different ways to import regular & modular
import styles from '../appStyles.module.css'  // different ways to import regular & modular

function StyleComponent() {
  return (
    <div>
      {/* These are referenced directly from the "appStyles.css" */}
      {/* These will bleed downwards to the children components */}
      <h1 className='error'>Error</h1>

      {/* These are dynamically called from the "appStyles.module.css" */}
      {/* These WILL NOT bleed downwards to the children components */}
      <h1 className={styles.success}>Success</h1>
    </div>
  )
}

export default StyleComponent
