import type React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  Info,
  AlertCircle,
  CheckCircle,
  X,
  Plus,
  Upload,
  FileText,
  Eye,
} from "lucide-react";
import { cn } from "../../utility/cn";

export type FileStatus = "idle" | "pending" | "success" | "error";

export interface FileItem {
  id: string;
  file: File | null;
  status: FileStatus;
  error?: string;
  previewUrl?: string;
}

export interface DropzoneWidgetProps {
  className?: string;
  maxSize?: number;
  accept?: string;
  multiple?: boolean;
  allowMultipleDropzones?: boolean;
  onFilesChange?: (files: FileItem[]) => void;
}

export function DropzoneWidget({
  className,
  maxSize = 5 * 1024 * 1024,
  accept = ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif",
  multiple = false,
  allowMultipleDropzones = true,
  onFilesChange,
}: DropzoneWidgetProps) {
  const [dropzones, setDropzones] = useState<FileItem[]>([
    { id: crypto.randomUUID(), file: null, status: "idle" },
  ]);

  const handleFileUpload = useCallback(
    (files: File[], dropzoneId: string) => {
      setDropzones((prev) => {
        const newDropzones = [...prev];
        const index = newDropzones.findIndex((dz) => dz.id === dropzoneId);

        if (index !== -1) {
          // Set status to pending first
          newDropzones[index] = {
            ...newDropzones[index],
            status: "pending",
          };

          // Generate preview URL for images
          let previewUrl: string | undefined = undefined;
          if (files[0] && files[0].type.startsWith("image/")) {
            previewUrl = URL.createObjectURL(files[0]);
          }

          // Simulate upload process
          setTimeout(() => {
            setDropzones((current) => {
              const updated = [...current];
              const idx = updated.findIndex((dz) => dz.id === dropzoneId);

              if (idx !== -1) {
                // Randomly succeed or fail for demo purposes
                // In a real app, this would be based on actual upload result
                const success = Math.random() > 0.2; // 80% success rate for demo

                updated[idx] = {
                  ...updated[idx],
                  file: files[0],
                  status: success ? "success" : "error",
                  error: success
                    ? undefined
                    : "Upload failed. Please try again.",
                  previewUrl: success ? previewUrl : undefined,
                };

                if (onFilesChange) {
                  onFilesChange(updated);
                }
              }

              return updated;
            });
          }, 1500);
        }

        return newDropzones;
      });
    },
    [onFilesChange]
  );

  const addDropzone = useCallback(() => {
    setDropzones((prev) => [
      ...prev,
      { id: crypto.randomUUID(), file: null, status: "idle" },
    ]);
  }, []);

  const removeDropzone = useCallback((id: string) => {
    setDropzones((prev) => {
      // Clean up any object URLs before removing
      const dropzoneToRemove = prev.find((dz) => dz.id === id);
      if (dropzoneToRemove?.previewUrl) {
        URL.revokeObjectURL(dropzoneToRemove.previewUrl);
      }

      const filtered = prev.filter((dz) => dz.id !== id);

      // Always keep at least one dropzone
      if (filtered.length === 0) {
        return [{ id: crypto.randomUUID(), file: null, status: "idle" }];
      }

      return filtered;
    });
  }, []);

  const resetDropzone = useCallback((id: string) => {
    setDropzones((prev) => {
      return prev.map((dz) => {
        if (dz.id === id) {
          // Clean up any object URLs before resetting
          if (dz.previewUrl) {
            URL.revokeObjectURL(dz.previewUrl);
          }
          return {
            ...dz,
            file: null,
            status: "idle",
            error: undefined,
            previewUrl: undefined,
          };
        }
        return dz;
      });
    });
  }, []);

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      dropzones.forEach((dz) => {
        if (dz.previewUrl) {
          URL.revokeObjectURL(dz.previewUrl);
        }
      });
    };
  }, [dropzones]);

  return (
    <div className={cn("space-y-4", className)}>
      {dropzones.map((dropzone) => (
        <SingleDropzone
          key={dropzone.id}
          id={dropzone.id}
          file={dropzone.file}
          status={dropzone.status}
          error={dropzone.error}
          previewUrl={dropzone.previewUrl}
          maxSize={maxSize}
          accept={accept}
          multiple={multiple}
          onUpload={handleFileUpload}
          onRemove={removeDropzone}
          onReset={resetDropzone}
          showRemoveButton={dropzones.length > 1}
        />
      ))}

      {allowMultipleDropzones && (
        <button className="w-full border-dashed" onClick={addDropzone}>
          <Plus className="mr-2 h-4 w-4" />
          Add Another Document
        </button>
      )}
    </div>
  );
}

interface SingleDropzoneProps {
  id: string;
  file: File | null;
  status: FileStatus;
  error?: string;
  previewUrl?: string;
  maxSize: number;
  accept: string;
  multiple: boolean;
  onUpload: (files: File[], id: string) => void;
  onRemove: (id: string) => void;
  onReset: (id: string) => void;
  showRemoveButton: boolean;
}

function SingleDropzone({
  id,
  file,
  status,
  error,
  previewUrl,
  maxSize,
  accept,
  multiple,
  onUpload,
  onRemove,
  onReset,
  showRemoveButton,
}: SingleDropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReject, setIsDragReject] = useState(false);
  const [fileRejections, setFileRejections] = useState<
    { file: File; errors: { message: string }[] }[]
  >([]);
  const [viewDocument, setViewDocument] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setIsDragReject(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setIsDragReject(false);

    if (status === "pending") return;

    const files = Array.from(e.dataTransfer.files);

    const rejections: { file: File; errors: { message: string }[] }[] = [];
    const acceptedFiles: File[] = [];

    files.forEach((file) => {
      const errors: { message: string }[] = [];

      // Check file size
      if (file.size > maxSize) {
        errors.push({
          message: `File is larger than ${maxSize / (1024 * 1024)} MB`,
        });
      }

      // Check file type
      const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
      const acceptedTypes = accept.split(",");
      if (
        !acceptedTypes.some(
          (type) => type.trim() === fileExtension || type.trim() === file.type
        )
      ) {
        errors.push({ message: `File type not accepted` });
      }

      if (errors.length) {
        rejections.push({ file, errors });
      } else {
        acceptedFiles.push(file);
      }
    });

    setFileRejections(rejections);

    if (acceptedFiles.length > 0) {
      onUpload(multiple ? acceptedFiles : [acceptedFiles[0]], id);
    } else if (rejections.length > 0) {
      setIsDragReject(true);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);

    // Validate files
    const rejections: { file: File; errors: { message: string }[] }[] = [];
    const acceptedFiles: File[] = [];

    files.forEach((file) => {
      const errors: { message: string }[] = [];

      // Check file size
      if (file.size > maxSize) {
        errors.push({
          message: `File is larger than ${maxSize / (1024 * 1024)} MB`,
        });
      }

      if (errors.length) {
        rejections.push({ file, errors });
      } else {
        acceptedFiles.push(file);
      }
    });

    setFileRejections(rejections);

    if (acceptedFiles.length > 0) {
      onUpload(multiple ? acceptedFiles : [acceptedFiles[0]], id);
    }

    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (status === "pending") return;
    if (file && status === "success") return;
    fileInputRef.current?.click();
  };

  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 border-yellow-300";
      case "success":
        return "bg-green-50 border-green-300";
      case "error":
        return "bg-red-50 border-red-300";
      default:
        return isDragActive
          ? isDragReject
            ? "bg-red-50 border-red-300"
            : "bg-blue-50 border-blue-300"
          : "bg-gray-50 border-gray-300";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "pending":
        return <Info className="h-6 w-6 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "error":
        return <AlertCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Upload className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusText = () => {
    if (file) {
      return (
        <div className="flex items-center">
          <FileText className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium truncate max-w-[200px]">
            {file.name}
          </span>
        </div>
      );
    }

    switch (status) {
      case "pending":
        return "Uploading document...";
      case "success":
        return "Document uploaded successfully";
      case "error":
        return error || "Upload failed. Please try again.";
      default:
        return isDragActive
          ? isDragReject
            ? "File type not accepted"
            : "Drop file here"
          : "Drag & drop document or click to browse";
    }
  };

  const isImage = file?.type.startsWith("image/");
  const isPdf = file?.type === "application/pdf";

  return (
    <div className="relative">
      {showRemoveButton && (
        <button
          className="absolute -right-2 -top-2 z-10 h-6 w-6 rounded-full bg-gray-100 p-1 hover:bg-gray-200"
          onClick={() => onRemove(id)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Remove</span>
        </button>
      )}

      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-lg border-1 border-gray-500 p-6 transition-colors",
          getStatusColor(),
          status === "pending"
            ? "cursor-not-allowed"
            : file && status === "success"
            ? "cursor-default"
            : "cursor-pointer",
          "relative overflow-hidden"
        )}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Background image for image files */}
        {previewUrl && isImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
            style={{ backgroundImage: `url(${previewUrl})` }}
          />
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          disabled={status === "pending"}
          onChange={handleFileInputChange}
        />

        <div className="flex flex-col items-center text-center z-10">
          {getStatusIcon()}
          <p className="mt-2 text-sm text-gray-700">{getStatusText()}</p>

          {fileRejections.length > 0 && (
            <p className="mt-2 text-xs text-red-500">
              {fileRejections[0].errors[0].message}
            </p>
          )}

          {status !== "pending" && !file && (
            <p className="mt-1 text-xs text-gray-500">
              Supported formats: PDF, DOC, DOCX, TXT, Images (max{" "}
              {maxSize / (1024 * 1024)}MB)
            </p>
          )}
        </div>

        {file && status === "success" && (
          <div className="flex gap-2 mt-2 z-10">
            <button
              className="flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                setViewDocument(true);
              }}
            >
              <Eye className="mr-1 h-4 w-4" />
              View
            </button>
            <button
              className="flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                onReset(id);
              }}
            >
              <Upload className="mr-1 h-4 w-4" />
              Replace
            </button>
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {viewDocument && file && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-medium">{file.name}</h3>
              <button onClick={() => setViewDocument(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 min-h-[300px]">
              {isImage && previewUrl && (
                <img
                  src={previewUrl || "/placeholder.svg"}
                  alt={file.name}
                  className="max-w-full h-auto mx-auto"
                />
              )}
              {isPdf && previewUrl && (
                <iframe
                  src={previewUrl}
                  className="w-full h-full min-h-[500px]"
                  title={file.name}
                />
              )}
              {!isImage && !isPdf && (
                <div className="flex flex-col items-center justify-center h-full">
                  <FileText className="h-16 w-16 text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Preview not available for this file type
                  </p>
                  <button
                    className="mt-4"
                    onClick={() => {
                      if (file) {
                        const url = URL.createObjectURL(file);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = file.name;
                        document.body.appendChild(a);
                        a.click();
                        URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                      }
                    }}
                  >
                    Download File
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
