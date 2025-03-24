"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { cn } from "../../utility/cn";

export interface DateFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  variant?: "general" | "normal" | "fancy";
}

export function DateField({
  label,
  helperText,
  error,
  fullWidth = false,
  required,
  disabled,
  className,
  id,
  name,
  variant,
  ...props
}: DateFieldProps) {
  const [theme, setTheme] = useState<"general" | "normal" | "fancy">("normal");

  useEffect(() => {
    // Get theme from sessionStorage or use provided variant or default to "normal"
    const storedTheme = sessionStorage.getItem("theme") as
      | "general"
      | "normal"
      | "fancy"
      | null;
    setTheme(variant || storedTheme || "normal");
  }, [variant]);

  // Theme-specific styles
  const inputStyles = {
    general: "min-w-64 h-10 px-3 py-2 bg-white border-gray-300 rounded-md",
    normal:
      " min-w-64 h-textfield px-4 py-2 bg-white border-primary rounded-md",
    fancy:
      "min-w-80 h-12 px-5 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-primary rounded-lg shadow-sm",
  };

  const inputId = id || name || "date-field";

  return (
    <div
      className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm font-medium",
            disabled && "text-gray-400",
            error && "text-red-500"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type="date"
          id={inputId}
          name={name}
          className={cn(
            "w-full text-gray-900 cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            inputStyles[theme]
          )}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-description`
              : undefined
          }
          {...props}
        />
      </div>

      {helperText && !error && (
        <p id={`${inputId}-description`} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
