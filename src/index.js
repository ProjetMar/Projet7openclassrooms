import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals'
import Propos from './pages/Propos'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'

import { Outlet } from 'react-router-dom'
import Logement from './pages/Logement'

const PageLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
)

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', Helvetica, sans-serif;
        font-weight : 500;
    }
`

const App = () => {
  let routes = useRoutes([
    {
      element: <PageLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/pages/Propos', element: <Propos /> },
      ],
    },
    { path: '/pages/Logement/:id', element: <Logement /> },
    { path: '*', element: <Error /> },
    // ...
  ])

  return routes
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <GlobalStyle />
    <Header />
    <App />
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
