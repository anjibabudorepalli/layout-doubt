import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const getBodyLeftNavbar = value =>
    value ? (
      <div className="body-1-1">
        <h1 className="head-nav">Left Navbar Menu</h1>

        <ul className="ul-con">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    ) : null
  const getBodyContent = value =>
    value ? (
      <div className="body-2-1">
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do elusmod
          tempor incididunt ut labore et dolore manga alluqa Ut enim ad inim
          veniam.
        </p>
      </div>
    ) : null
  const getBodyRightContent = value =>
    value ? (
      <div className="body-3-1">
        <h1 className="head-nav">Right Navbar</h1>
        <p className="box-para">Ad 1</p>
        <p className="box-para">Ad 2</p>
      </div>
    ) : null

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            <div className="body-1-2">{getBodyLeftNavbar(showLeftNavbar)}</div>
            <div className="body-2-2">{getBodyContent(showContent)}</div>
            <div className="body-3-2">
              {getBodyRightContent(showRightNavbar)}
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
