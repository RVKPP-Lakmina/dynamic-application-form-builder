import React from "react";
import { DateField } from "../../ui/DataBox";
import { MetaDataProps } from "../../../interfaces/interfaces";

interface DateBoxProps extends MetaDataProps {
  elementId: string;
}

const DateBox: React.FC<DateBoxProps> = ({ metaData }: DateBoxProps) => {
  return <DateField label={metaData?.title} />;
};

export default DateBox;
