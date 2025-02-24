import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"

import { UserProvider } from "./context/useAuth"
  
export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Juicer</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  )
}

export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div id="spinner-container" className="space-y-10">
            {/* Spinner */}
            <div className="flex justify-center">
                <div className="w-16 h-16 border-4 border-blue-500  border-t-transparent rounded-full animate-spin">
                </div>
            </div>
        </div>
        <h1>We are gathering the good stuff!</h1>
    </div>
  )
}