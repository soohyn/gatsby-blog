import * as React from "react"
import { Link } from "gatsby"
import Footer from "../Footer"
import { styled } from "styled-components"
import Header from "../Header"

interface LayoutProps {
  location: any //!
  title: string
  children?: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <LayoutStyled className="global-wrapper" data-is-root-path={isRootPath}>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div``

export default Layout
