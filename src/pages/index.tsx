import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>映画ブログ</h1>
      <img src="/eltopo.jpeg" alt="" />
      <div className="explanation">
        <p>鑑賞した映画をまとめていく</p>
      </div>
    </div>
  </>
)
