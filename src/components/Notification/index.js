import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="d-flex each-notification">
      {children}
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
