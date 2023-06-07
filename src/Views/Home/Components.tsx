import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Checkbox, FormControlLabel, Modal, Paper, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { useEffect, useState } from "react"
import { createUser } from "../../graphql/mutations"
import { listUsers } from "../../graphql/queries"

export const NewsletterForm = () => {
  const [firstName, setFirstName] = useState<String>("")
  const [lastName, setLastName] = useState<String>("")
  const [email, setEmail] = useState<String>("")
  const [newsLetter, setNewsLetter] = useState<boolean>(true)
  const [newAccountModal, setNewAccountModal] = useState<boolean>(false)

  const setNewsletterHook = (event, setHook) => {
    setHook(event.target.value)
  }

  const checkEmailAvailability = async (email) => {
    try {
      const response:any = await API.graphql(graphqlOperation(listUsers, { filter: { Email: { eq: email } } }));
      const users = response.data.listUsers.items;
  
      return users.length === 0;
    } catch (error) {
      console.error('Error checking email availability:', error);
    }
  }

  const handleSubmit = async () => {

    try {
      const isEmailAvailable = await checkEmailAvailability(email)
      console.log("handleSubmit isEmailAvailable response: ", isEmailAvailable)
  
      if (!isEmailAvailable) {
        console.error('Email address is already in use')
        return
      }

      try {
        console.log(email, firstName, lastName, newsLetter)
        if(email==undefined || firstName==undefined || lastName==undefined || newsLetter==undefined){
          console.error("Null values")
        }else{
          const response:any = await API.graphql(graphqlOperation(createUser, {
            input: {
              First: firstName,
              Last: lastName,
              Email: email,
              Newsletter: newsLetter,
            },
          }))
          console.log("createUser response: ", response)
          return response.data.createUser;
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }

    } catch (error) {
      console.error('Error creating user:', error)
    }
  }
  


  return (
    <Paper sx={{backgroundColor: "rgb(255,2555,255,.8)", alignItems:"start"}}>
      <Typography variant="h4">Get our newsletter!</Typography>
      <Typography variant="caption">I'm going to aim for monthly, unsubscribe at any time</Typography>
      <form onSubmit={handleSubmit} style={{margin:"10px", backgroundColor:"white"}}>
        <TextField
          label="First Name"
          variant="outlined"
          required
          margin="normal"
          sx={{width:"45%", mr:"5%"}}
          onChange={(e) => setNewsletterHook(e, setFirstName)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          required
          margin="normal"
          sx={{width:"45%", ml:"5%"}}
          onChange={(e) => setNewsletterHook(e, setLastName)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          onChange={(e) => setNewsletterHook(e, setEmail)}
        />

        <FormControlLabel 
          control={<Checkbox defaultChecked />} 
          label="Sign up for monthly newsletter" 
          onChange={()=>setNewsLetter(!newsLetter)}
        />

        <FormControlLabel 
          control={<Checkbox />} 
          label="Create Account" 
          onChange={()=> setNewAccountModal(!newAccountModal)}
        />

        <br />

        <Button variant="contained" color="primary" sx={{mr:"10px"}} onClick={handleSubmit}>
          Signup for Newsletter
        </Button>
        <Button variant="contained" color="secondary"  sx={{ml:"10px"}}>
          Sign in to Account
        </Button>
      </form>
    </Paper>
  )
}


export function Calendar() {
  useEffect(() => {
    const googleClientId = process.env.google_calendar_client_id
    const googleClientSecret = process.env.google_calendar_client_secret
    console.log(googleClientId, googleClientSecret)

    }, [])

  return <></>
}

export const ContactForm = () => {
  const [header, setHeader] = useState('')
  const [body, setBody] = useState('')
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      await Auth.currentAuthenticatedUser()
      setIsAuthenticated(true)
    } catch (error) {
      setIsAuthenticated(false)
    }
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target
    if (id === 'header-input') {
      setHeader(value)
    } else if (id === 'question-input') {
      setBody(value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isAuthenticated) {
      submitForm()
    } else {
      setSignInModalOpen(true)
    }
  }

  const submitForm = () => {
    console.log('Submitted:', header, body)
  }

  const handleOpenModal = () => {
    setSignInModalOpen(true)
  }

  const handleCloseModal = () => {
    setSignInModalOpen(false)
  }

  const handleModalSubmit = () => {
    Auth.federatedSignIn()
  }

  return (
    <div>
      
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
    </div>
  )
}


export function CampaignPoints() {
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
          In a time when trust in leadership is paramount, I am committed to a new standard for transparency, honesty, and responsiveness. This goes beyond making empty promises it's about clear, forthright communication, sharing updates as soon as they become available to me, and holding myself accountable to our community.
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

  /**
   * Community engagement is the cornerstone of a thriving Dekalb, a principle that extends beyond simple dialogue. It encapsulates collaboration, shared vision, and above all, genuine listening to the varied voices of Dekalb residents. As your representative, I pledge to be a leader who also listens, ensuring that your voices shape the policies we enact. My technical background uniquely positions me to improve our town's digital platforms, making local government more accessible to every resident.

But engagement goes beyond mere interaction it's about fostering trust, building relationships, and uniting towards shared goals. I'm committed to transforming our local government's rapport with you into a process that's more open, participatory, and collaborative. Leveraging my technical experience, I plan to enhance our town's digital reach, ensuring we connect with everyone, both in the physical community spaces and the digital realms where they reside. A special focus will be empowering our younger generation, nurturing civic involvement, and fostering leadership skills. Together, we can create a Dekalb that authentically reflects our collective aspirations and values.
   */



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
  )
  
}

