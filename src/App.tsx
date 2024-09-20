import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { MainRoutes } from './router/MainRoutes'

export const App = () => {
  return (
    <>
      <ToastContainer />
      <MainRoutes />
    </>
  )
}