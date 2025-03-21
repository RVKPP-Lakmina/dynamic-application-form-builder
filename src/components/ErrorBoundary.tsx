import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@mui/material";

interface ErrorBoundaryProps {
  children: ReactNode;
  message?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private getMailBody(): string {
    const { error, errorInfo } = this.state;
    const message = {
      error: error?.message || "Unknown error",
      info: errorInfo?.componentStack || "No stack trace available",
    };
    return encodeURIComponent(JSON.stringify(message, null, 2));
  }

  private handleContactAdmin = () => {
    const subject = "System Failure";
    const body = this.getMailBody();
    window.open(
      `mailto:creditsupport@xgengroup.com.au?subject=${encodeURIComponent(
        subject
      )}&body=${body}`
    );
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center px-4 py-16 md:py-24">
          <div className="mx-auto flex max-w-md flex-col items-center space-y-6 text-center">
            <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
              <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Something went wrong!
            </h1>

            <p className="text-muted-foreground">
              We apologize for the inconvenience. An unexpected error has
              occurred.
            </p>

            <Button
              onClick={() => {
                window.location.reload();
                this.handleContactAdmin();
              }}
              className="mt-6 animate-pulse"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
