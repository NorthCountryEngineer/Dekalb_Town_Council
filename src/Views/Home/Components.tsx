import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { useEffect } from "react"

export function Calendar() {
  useEffect(() => {
    const googleClientId = process.env.google_calendar_client_id;
    const googleClientSecret = process.env.google_calendar_client_secret;
    console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}

/**type Key @model {
  id: ID!
  clientID: String!
  clientSecret: String!
} */
