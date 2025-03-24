import type React from "react";

import { forwardRef, useEffect, useState } from "react";
import { cn } from "../../utility/cn";
import { ThemeVariants } from "../../interfaces/interfaces";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
  placeholder?: string;
}

const SelectBox = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      options,
      label,
      helperText,
      error,
      fullWidth = false,
      required,
      disabled,
      placeholder,
      containerClassName,
      labelClassName,
      selectClassName,
      helperTextClassName,
      errorClassName,
      className,
      ...props
    },
    ref
  ) => {
    const [theme, setTheme] = useState<"general" | "normal" | "fancy">(
      "normal"
    );

    useEffect(() => {
      const storedTheme = sessionStorage.getItem("theme") as ThemeVariants;
      setTheme(storedTheme || "normal");
    }, []);

    const themeStyles = {
      general: "w-64 h-10 px-3 py-2 bg-gray-100",
      normal: "w-64 h-10 px-3 py-2 bg-white",
      fancy:
        "w-80 h-12 px-5 py-3 bg-gradient-to-r from-purple-50 to-blue-50 shadow-md",
    };

    return (
      <div
        className={cn(
          "flex flex-col gap-1.5",
          fullWidth && "w-full",
          containerClassName
        )}
      >
        <label
          htmlFor={props.id || props.name}
          className={cn(
            "text-sm font-medium",
            disabled && "text-gray-400",
            error && "text-red-500",
            labelClassName
          )}
        >
          {label || "Select"}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <select
          ref={ref}
          className={cn(
            "h-10 px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900",
            "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
            "disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            themeStyles[theme],
            fullWidth && "w-full",
            selectClassName,
            className
          )}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${props.id || props.name}-error`
              : helperText
              ? `${props.id || props.name}-description`
              : undefined
          }
          {...props}
        >
          {placeholder && (
            <option value="" disabled={required}>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {helperText && !error && (
          <p
            id={`${props.id || props.name}-description`}
            className={cn("text-sm text-gray-500", helperTextClassName)}
          >
            {helperText}
          </p>
        )}

        {error && (
          <p
            id={`${props.id || props.name}-error`}
            className={cn("text-sm text-red-500", errorClassName)}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectBox.displayName = "NativeSelect";

export default SelectBox;
