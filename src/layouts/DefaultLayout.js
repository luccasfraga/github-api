
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Aside  from "../components/Aside";
import { Container } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      
      <Container>
        <Aside />
        <Outlet />
      </Container>
    </>
  )
}