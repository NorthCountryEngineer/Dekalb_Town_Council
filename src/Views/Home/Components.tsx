import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react"

export function Calendar() {
  useEffect(() => {
    const googleClientId = process.env.google_calendar_client_id;
    const googleClientSecret = process.env.google_calendar_client_secret;
    console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}


export const ContactForm = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">
          Leave a comment
        </Typography>
        <TextField id="header-input" label="Header" variant="outlined" />

        <TextField
          id="question-input"
          label="Question or Comment"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

/**type Key @model {
  id: ID!
  clientID: String!
  clientSecret: String!
} */
