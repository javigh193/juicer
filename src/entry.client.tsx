import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { HydratedRouter } from "react-router/dom"
import './index.css'
import "react-toastify/dist/ReactToastify.css"

ReactDOM.hydrateRoot(
  document,
  <StrictMode>
    <HydratedRouter />
  </StrictMode>,
)
