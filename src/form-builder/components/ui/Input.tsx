import { cn } from "../../utility/cn";
import { useEffect, useState } from "react";
import { ThemedInputProps, ThemeVariants } from "../../interfaces/interfaces";

export default function Input({
  className,
  variant,
  label,
  required,
  labelClassName,
  disabled,
  ...props
}: ThemedInputProps) {
  const [theme, setTheme] = useState<ThemeVariants>("normal");

  useEffect(() => {
    const storedTheme = sessionStorage.getItem("theme") as ThemeVariants;
    setTheme(variant || storedTheme || "normal");
  }, [variant]);

  const themeStyles = {
    general: "min-w-64 h-10 px-3 py-2 bg-gray-100",
    normal: "min-w-64 px-4 py-2 bg-white",
    fancy:
      "min-w-80 h-12 px-5 py-3 bg-gradient-to-r from-purple-50 to-blue-50 shadow-md",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={props.id || props.name}
        className={cn(
          "text-sm font-medium",
          disabled && "text-gray-400",
          labelClassName
        )}
      >
        {label || ""}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        className={cn(
          `${themeStyles[theme]} flex field-sizing-content  border border-gray-300 rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`,
          className
        )}
        {...props}
      />
    </div>
  );
}
