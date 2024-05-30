import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ROUTES from './routes'

export default function AppLayout() {

	return (
		<App>
			<Nav>
				<ul>
					<li>
						<StyledNavLink to={ROUTES.topicsRoute()} activeclassname='active'>Topics</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={ROUTES.quizzesRoute()} activeclassname='active'>Quizzes</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to={ROUTES.newQuizRoute()} activeclassname='active'>New Quiz</StyledNavLink>
					</li>
				</ul>
			</Nav>
			<Outlet/>
		</App>
	)
}

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 24px;
  margin-top: 10rem;
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #005672;
  display: flex;
  width: 100%;
  padding: 2.5rem 3.6rem;
  ul {
    max-width: 120rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    list-style: none;
  }
  li {
    margin-bottom: 0 !important;
  }
`

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  font-weight: normal;
  letter-spacing: 0.5px;
  transition: all .12s ease-in-out;
  &:focus {
    font-weight: bold;
  }
`