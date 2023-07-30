import * as React from "react"
import { Link } from "gatsby"
import Footer from "../Footer"
import { styled } from "styled-components"
import Header from "../Header"
import Bio from "../Bio"

interface LayoutProps {
  location: any //!
  title: string
  children?: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <LayoutStyled data-is-root-path={isRootPath}>
      <Header title={title} />
      <div className="layout-row-container">
        <div className="left-container">
          <Bio />
        </div>

        <div className="right-container">
          <main>{children}</main>
        </div>
      </div>

      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;

  .layout-row-container {
    display: flex;
    flex-direction: row;
    min-height: 80vh;
    border: 1px dotted red;

    > .left-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    > .right-container {
      display: flex;
      flex-direction: column;
      padding: 20px;
      flex: 1;
    }
  }
`

export default Layout
