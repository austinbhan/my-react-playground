import styles from '../App.scss';
import { Accordion, Typography } from '@mui/material';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ExerciseFour() {
  return (
    <div className={styles.ExerciseFour}>
      <h2>Exercise 4: Use MaterialUI Accordion 
        to graphically represent array objects</h2>
      <Accordion> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
          <Typography>
                Item 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the item description
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// Graph: X-axis = Name of country
// Graph: Y-axis = Population size
