import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import { ArrowDownFromLine, CircleEllipsis } from "lucide-react";

const AccordionComponent = ({ children, formData, expanded, onExpand }) => {
  return (
    <Accordion
      expanded={expanded === formData.dataKey}
      onChange={onExpand(formData.dataKey)}
      sx={{
        bgcolor: "background.paper",
        color: "#000",
        boxShadow: "none",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDownFromLine />}
        aria-controls={`panel1bh-content-${formData.dataKey}`}
        id={`panel1bh-header-${formData.dataKey}`}
        sx={{
          borderBottom:
            expanded === formData.dataKey ? 0 : `1px solid "#e0e0e0"`,
        }}
      >
        <Stack direction="row" alignItems="center" gap={2}>
          <CircleEllipsis className="text-[#ffd230]" />
          <Stack>
            <h3 className="text-lg font-medium">{formData.title}</h3>
            <Typography variant="subtitle2" color="text.secondary">
              Enter {formData.title} Here{" "}
            </Typography>
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
