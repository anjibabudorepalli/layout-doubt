import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const configurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onToggleShowContent1 = () => {
        onToggleShowContent()
      }

      const onToggleShowLeftNavbar1 = () => {
        onToggleShowLeftNavbar()
      }

      const onToggleShowRightNavbar1 = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configure-container">
          <h1 className="head-configure">Layout</h1>
          <ul className="ul-container">
            <li>
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                onClick={onToggleShowContent1}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                id="left"
                type="checkbox"
                checked={showLeftNavbar}
                onClick={onToggleShowLeftNavbar1}
              />
              <label htmlFor="left">Left Navbar</label>
            </li>

            <li>
              <input
                id="right"
                type="checkbox"
                checked={showRightNavbar}
                onClick={onToggleShowRightNavbar1}
              />
              <label htmlFor="right">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default configurationController
