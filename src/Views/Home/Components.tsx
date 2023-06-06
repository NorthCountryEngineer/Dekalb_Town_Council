import { Divider } from "@aws-amplify/ui-react"
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Modal, TextField, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"

export function Calendar() {
  useEffect(() => {
    const googleClientId = process.env.google_calendar_client_id
    const googleClientSecret = process.env.google_calendar_client_secret
    console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}

export const ContactForm = () => {
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'header-input') {
      setHeader(value);
    } else if (id === 'question-input') {
      setBody(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isAuthenticated) {
      submitForm();
    } else {
      setSignInModalOpen(true);
    }
  };

  const submitForm = () => {
    console.log('Submitted:', header, body);
  };

  const handleOpenModal = () => {
    setSignInModalOpen(true);
  };

  const handleCloseModal = () => {
    setSignInModalOpen(false);
  };

  const handleModalSubmit = () => {
    Auth.federatedSignIn();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="/Images/EricHomePhoto.png" alt="Your Photo" sx={{ width: '50px' }} />
            <Typography variant="h4" style={{ marginLeft: '10px' }}>
              Ask me Anything
            </Typography>
          </div>
          <Typography variant="overline" display="block">
            Submit a public or anonymous question or comment to me, and I will respond directly to you within 24 hours.
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {isAuthenticated ? (
              <Button variant="contained" type="submit" onClick={submitForm}>
                Submit
              </Button>
            ) : (
              <Button variant="contained" onClick={handleOpenModal}>
                Sign in/Sign up
              </Button>
            )}
          </div>
        </Stack>
      </form>

      <Modal open={signInModalOpen} onClose={handleCloseModal}>
        <Stack direction="column" spacing={2} p={2}>
          <Typography variant="h6">Please sign in or create an account to submit your question.</Typography>
          <Button variant="contained" onClick={handleModalSubmit}>
            Sign in / Sign up
          </Button>
        </Stack>
      </Modal>
    </>
  );
};


export default function CampaignPoints() {
  const intelligentGrowth = ()=> {
    return(
      <>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          In my time as an Army officer, I didn't just serve in combat roles - I received extensive training from USAID in local governance and worked on the ground in Afghanistan to secure funding from an array of sources, including national government, NGOs, international governments, and private donors. I know the tenacity, attention to detail, and strategic thinking required to access the funding that is out there. 
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          This experience directly translates to my vision for Dekalb. I'm committed to putting the time and effort into seeking out county and state funding that could be crucial for our town's development. By enhancing our infrastructure, supporting small businesses, and leveraging my experience in technology, I believe we can bring innovative, intelligent growth to Dekalb. We deserve a future that is sustainable and bright, and I'm ready to work tirelessly to help us reach that future.
        </Typography>
      </>
    )
  }


  const transparentGovernance = ()=> {
    return(
      <>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          In a time when trust in leadership is paramount, I am committed to a new standard for transparency, honesty, and responsiveness. This goes beyond making empty promises; it's about clear, forthright communication, sharing updates as soon as they become available to me, and holding myself accountable to our community.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          I pledge to meet people where they are, engaging through a variety of social media platforms, including Facebook, Twitter, Reddit, Instagram, and even TikTok. I aim to make local government part of our everyday conversation, ensuring everyone in our community, particularly the younger generation, is informed, engaged, and has their voice heard. Together, we can make local governance a collective effort that truly serves Dekalb.
      </Typography>
     </>
    )
  }

  const economicDevelopment = ()=> {
    return(
      <>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          With an MBA from Syracuse University and product leadership experience at Amazon, I have the knowledge and experience to foster strategic business growth and innovation in Dekalb. My goal is to cultivate an environment conducive to sustainable, long-term economic development, not just quick fixes.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', mb:"5px" }}>
          I am dedicated to supporting our local businesses and attracting new enterprises aligned with our town's values. By focusing on efforts with the highest return on investment, fostering innovation, and building a sustainable local economy, we can ensure Dekalb is a place where people are proud to work and live, now and for future generations.
      </Typography>
     </>
    )
  }



  return (
    <div>
      <Typography variant="h4">Campaign Platform</Typography>
      <Typography variant="caption">Click each item to read more</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" sx={{ textAlign: 'left', mb:"5px" }}>
            Intelligent Growth
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', mb:"5px" }}>
          <Typography >
            {intelligentGrowth()}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" sx={{ textAlign: 'left', mb:"5px" }}>
            Transparent Governance
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', mb:"5px" }}>
          <Typography sx={{ textAlign: 'left', mb:"5px" }}>
            {transparentGovernance()}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h5" sx={{ textAlign: 'left', mb:"5px" }}>
            Economic Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left', mb:"5px" }}>
          <Typography sx={{ textAlign: 'left', mb:"5px" }}>
            {economicDevelopment()}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  
}

