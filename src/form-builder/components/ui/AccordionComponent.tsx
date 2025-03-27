import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import {
  ArrowDownFromLine,
  CircleHelp,
  CircleEllipsis,
  Pencil,
  CircleCheck,
} from "lucide-react";
import { FormStatus, FormStore } from "../../interfaces/interfaces";

interface AccordionComponentProps {
  children: React.ReactNode;
  formData: FormStore;
  expanded: string | false;
  status?: FormStatus;
  pencilClick?: () => void;
  onExpand: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  children,
  formData,
  expanded,
  status,
  onExpand,
  pencilClick,
}: AccordionComponentProps) => {
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
          display: "flex",
          alignItems: "center",
          borderBottom:
            expanded === formData.dataKey ? 0 : `1px solid "#e0e0e0"`,
        }}
      >
        <Stack
          key={`panel1bh-content-Stack-${formData.dataKey}`}
          direction="row"
          alignItems="center"
          gap={2}
        >
          <IconSelection status={status || "pending"} />
          <Stack>
            <h3 className="text-lg font-medium">{formData.title}</h3>
            <Typography variant="subtitle2" color="text.secondary">
              Enter {formData.title} Here{" "}
            </Typography>
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex justify-end p-1.5 ">
          <button
            onClick={pencilClick}
            className="p-1.5 rounded-full hover:bg-gray-100 hover:text-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Edit"
          >
            <Pencil className="h-4 w-4 " />
          </button>
        </div>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;

interface IconSelectionProps {
  status: FormStatus;
}

const IconSelection: React.FC<IconSelectionProps> = ({
  status,
}: IconSelectionProps) => {
  if (status === "success") {
    return <CircleCheck className="text-green-600" />;
  }

  if (status === "error") {
    return <CircleHelp className="text-red-600" />;
  }

  return <CircleEllipsis className="text-[#ffd230]" />;
};
