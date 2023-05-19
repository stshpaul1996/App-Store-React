// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-head">{appName}</p>
    </li>
  )
}
export default AppItem
