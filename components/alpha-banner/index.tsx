import React, { useState } from 'react'
import cx from 'classnames'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AlphaBanner: React.FC = () => {

/* Initialise state */
const [isOpen, setIsOpen] = useState(false)

const toggleBanner = () => setIsOpen(!isOpen)

return <div className={cx(styles['alpha'], isOpen ? styles['more'] : styles['corner'])} onClick={toggleBanner}>
    <p className={styles['banner']}>Alpha <FontAwesomeIcon className={styles['close-icon']} icon={faTimes} /></p>
    <div className={styles['roadmap']}>
      <p>
        <strong>So. This website is a bit sparse, isn't it!</strong>
      </p>
      <p>
        There's a ton more to come but I had to put this up as a holding page for the time being.
      </p>
      <p>Here's a basic roadmap:</p>
      <ul>
        <li>An actual contact page</li>
        <li>A HTML version of my CV</li>
        <li>Quite a lot more content</li>
        <li>A bit of animation fanciness</li>
        <li>Also gonna hook up a backend but you won't notice that</li>
      </ul>
    </div>
  </div>
}

export default AlphaBanner
