import { redirect } from "react-router"
import { JuicingStation } from "../components/JuicingStation/JuicingStation"
import { jwtDecode } from "jwt-decode"

// eslint-disable-next-line react-refresh/only-export-components
export async function clientLoader() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const jwt = localStorage.getItem("refresh_token")
  console.log(jwt)
  if (jwt) {
      const date = new Date()
      const expirationTime = jwtDecode(jwt).exp
      if (expirationTime) {
          // Timestamp in the token is in seconds since Unix epoch
          const tokenHasExpired = date.getTime() > expirationTime * 1000
          console.log(tokenHasExpired)
          if (!tokenHasExpired) {
            return null
          }
      }
  }
  // If the token does not garanteed the user is logged in, redirect to login page
  return redirect("/login")
}

export default function Component() {
    return (
        <JuicingStation />
      )
}