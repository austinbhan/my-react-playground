import styles from '../App.scss';
import { Accordion, AccordionSummary, Typography } from '@mui/material';

export default function AccordionElement({ 
  country, 
  capitol, 
  spoken_language, 
  continent, 
  population 
}) {

  return (
    <div className={styles.accordionElement}>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography>
              {country}
            </Typography>
          </AccordionSummary>
          <AccordionSummary>
            {`Capitol: ${capitol}`},
            {` Spoken Language: ${spoken_language}`},
            {` Continent: ${continent}`},
            {` Population ${population}`}
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}
