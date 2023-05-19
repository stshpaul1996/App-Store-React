// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="list-item">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
