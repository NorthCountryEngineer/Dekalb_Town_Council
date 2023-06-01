import {createBrowserRouter} from "react-router-dom"
import { Home } from "./Views/Home"

export const paths: any = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/privacy",
      element: <></>,
    },
    {
      path: "/tos",
      element: <></>,
    },
  ]

export const router = createBrowserRouter(paths)