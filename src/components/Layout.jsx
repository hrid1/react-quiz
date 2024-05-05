import Nav from "./Nav";
import classes from '../styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <div>

        <Nav></Nav>
        <main>
            <div className={classes.main}>
              <div className={classes.container}>
              {children}
              </div>
            </div>
        </main>
      
    </div>
  )
}
