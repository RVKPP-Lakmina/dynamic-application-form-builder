import { useState, useEffect } from "react";
import { cn } from "../../utility/cn";
import { Button } from "@mui/material";

interface DualOptionProps {
  leftOption: string;
  rightOption: string;
  defaultSelected?: "left" | "right";
  onChange?: (selected: "left" | "right") => void;
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
  variant?: "general" | "normal" | "fancy";
}

export default function DualOptions({
  leftOption,
  rightOption,
  defaultSelected = "left",
  onChange,
  name,
  label,
  disabled = false,
  required = false,
  error,
  className,
  variant,
}: DualOptionProps) {
  const [selected, setSelected] = useState<"left" | "right">(defaultSelected);
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

  const handleSelect = (option: "left" | "right") => {
    if (disabled) return;
    setSelected(option);
    onChange?.(option);
  };

  const buttonStyles = {
    general: {
      active: "bg-button-dual-option shadow-sm text-gray-800",
      inactive: " text-gray-600 hover:bg-gray-200",
    },
    normal: {
      active: "bg-button-dual-option shadow-sm text-primary font-medium",
      inactive: " text-gray-600 hover:bg-gray-100",
    },
    fancy: {
      active: "bg-[#9c27b0] text-white shadow-md text-primary font-medium",
      inactive: " text-gray-600 hover:bg-white/50",
    },
  };

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
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

      <div
        className={cn(
          "inline-flex rounded-md gap-2.5",
          disabled && "opacity-60"
        )}
      >
        <button
          type="button"
          className={`bg-button-dual-option px-4 py-2 text-sm rounded-md transition-colors
            focus:outline-none border border-primary
           ${
             (selected === "left"
               ? buttonStyles[theme].active
               : buttonStyles[theme].inactive,
             disabled && "cursor-not-allowed")
           }
            `}
          onClick={() => handleSelect("left")}
          disabled={disabled}
          aria-pressed={selected === "left"}
          name={name}
          value="left"
        >
          {leftOption}
        </button>
        <Button
          type="button"
          className={cn(
            " px-4 py-2 text-sm rounded-md transition-colors",
            "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1",
            selected === "right"
              ? buttonStyles[theme].active
              : buttonStyles[theme].inactive,
            disabled && "cursor-not-allowed"
          )}
          onClick={() => handleSelect("right")}
          disabled={disabled}
          aria-pressed={selected === "right"}
          name={name}
          value="right"
        >
          {rightOption}
        </Button>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
