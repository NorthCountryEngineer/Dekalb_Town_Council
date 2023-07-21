import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

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

