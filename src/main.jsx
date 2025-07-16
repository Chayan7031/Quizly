import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuizlyLanding from './components/QuizlyLanding.jsx'
import Quiz from './components/Quiz.jsx'
import AboutPage from './components/About.jsx'
import AiChat from './components/AiChat.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path: "",
        element : <QuizlyLanding/>
      },
      {
        path: "quiz",
        element: <Quiz/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "aichat",
        element : <AiChat/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
