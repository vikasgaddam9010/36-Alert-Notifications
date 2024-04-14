import './index.css'
import Notification from '../Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

const AlertNotifications = () => {
  const getSuccessView = () => {
    return (
      <Notification>
        <div className="d-flex alert-notification">
          <AiFillCheckCircle className="icon success-icon" />
          <div className="notification-head-para">
            <h1 className="m-0 success-icon">Success</h1>
            <p className="para-color">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
    )
  }
  const getErrorView = () => {
    return (
      <Notification>
        <div className="d-flex alert-notification">
          <RiErrorWarningFill className="error-icon" />
          <div className="notification-head-para">
            <h1 className="m-0 error-icon">Error</h1>
            <p className="para-color">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
    )
  }
  const getWarningView = () => {
    return (
      <Notification>
        <div className="d-flex alert-notification">
          <MdWarning className="warning-icon" />
          <div className="notification-head-para">
            <h1 className="m-0 warning-icon">Warning</h1>
            <p className="para-color">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
    )
  }
  const getInfoView = () => {
    return (
      <Notification>
        <div className="d-flex alert-notification">
          <MdInfo className="info-icon" />
          <div className="notification-head-para">
            <h1 className="m-0 info-icon">Info</h1>
            <p className="para-color">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </Notification>
    )
  }
  return (
    <div className="bg-container d-flex flex-direction-column">
      <h1>Alert Notifications</h1>
      {getSuccessView()}
      {getErrorView()}
      {getWarningView()}
      {getInfoView()}
    </div>
  )
}
export default AlertNotifications
