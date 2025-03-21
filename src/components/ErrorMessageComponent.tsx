import { Button } from "@mui/material";
import { RefreshCwIcon as ReloadIcon } from "lucide-react";
import { AlertCircle } from "lucide-react";

interface ErrorMessageComponentProps {
  headMessage: React.ReactNode;
  errorMessage: React.ReactNode;
  btnText?: string;
  onClick?: () => void;
  isLoading?: boolean;
  showImg?: boolean;
}

export const ErrorMessageComponent = ({
  headMessage,
  errorMessage,
  btnText = "Try Again",
  onClick,
  isLoading = false,
  showImg = true,
}: ErrorMessageComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      {showImg && (
        <div className="mb-4 text-gray-400">
          <AlertCircle size={48} />
        </div>
      )}

      <h2 className="text-xl font-bold mb-2">{headMessage}</h2>

      <p className="text-sm text-gray-600 mb-6">{errorMessage}</p>

      {onClick && (
        <Button
          onClick={onClick}
          disabled={isLoading}
          className="flex items-center"
        >
          {isLoading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {btnText}
        </Button>
      )}
    </div>
  );
};
