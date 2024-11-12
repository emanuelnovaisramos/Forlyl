import "./styles.scss";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";

export const FaqAccordion = ({
  question,
}: {
  question: { title: string; text: string };
}) => {
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<IoIosArrowDown className="icon" />}
        aria-controls="panel2-content"
        id="panel2-header"
        className="summary"
      >
        {question.title}
      </AccordionSummary>
      <AccordionDetails className="details">
        <p>{question.text}</p>
      </AccordionDetails>
    </Accordion>
  );
};
