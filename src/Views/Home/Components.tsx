import { Divider } from "@aws-amplify/ui-react";
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react"

export function Calendar() {
  useEffect(() => {
    const googleClientId = process.env.google_calendar_client_id;
    const googleClientSecret = process.env.google_calendar_client_secret;
    console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}

export const ContactForm = () => {
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    console.log(value)
    if (id === 'header-input') {
      setHeader(value);
    } else if (id === 'question-input') {
      setBody(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(header,body)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">Ask me Anything</Typography>
        <Typography variant="overline" display="block">
          Submit a public or anonymous question or comment to me and I will respond directly to you within 24 hours.
        </Typography>
        <TextField
          required
          id="question-input"
          label="Question or Comment"
          multiline
          rows={4}
          variant="outlined"
          value={body}
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
