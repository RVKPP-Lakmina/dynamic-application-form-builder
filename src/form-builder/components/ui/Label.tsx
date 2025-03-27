import { forwardRef } from "react";
import { cn } from "../../utility/cn";

interface LabelProps {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  labelClassName?: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    { id, name, label, required, disabled, error, labelClassName, ...props },
    ref
  ) => {
    return (
      <label
        ref={ref}
        htmlFor={id || name}
        className={cn(
          "text-sm font-medium",
          disabled && "text-gray-400",
          error && "text-red-500",
          labelClassName
        )}
        {...props}
      >
        {label || "Select"}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  }
);

export default Label;
