"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createDomain } from "@/action/domain";
import { Loader2 } from "lucide-react";
import { Widget } from "@uploadcare/react-widget";

export function AddDomainForm({ workspaceId }: { workspaceId: string }) {
  const [domainName, setDomainName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  

  const handleCreateDomain = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!domainName.trim()) {
      toast.error("Please provide a valid domain name");
      return;
    }

    if (!imageUrl) {
      toast.error("Please upload a domain icon");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await createDomain({
        name: domainName.trim(),
        icon: imageUrl,
        workspaceId,
      });

      if (response.status === 200) {
        toast.success("Domain created successfully");
        setDomainName("");
        setImageUrl("");
      } else {
        toast.error(
          `Failed to create domain: ${response.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Domain creation error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (fileInfo: any) => {
    if (fileInfo) {
      setIsUploading(true);
      // Get the CDN URL of the uploaded file
      const fileUrl = fileInfo.cdnUrl;
      setImageUrl(fileUrl);
      setIsUploading(false);
      toast.success("Image uploaded successfully");
    }
  };

  return (
    <form onSubmit={handleCreateDomain} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="domain">Domain Name</Label>
        <Input
          id="domain"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
          placeholder="example.com"
          className="w-full"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="block">
          Domain Icon
        </Label>
        <div className="flex flex-col items-center">
          <Widget
            publicKey="16533f93a4c349051561" // Replace with your Uploadcare public key
            onChange={handleFileUpload}
            previewStep
            clearable
            crop="1:1"
            tabs="file url"
            inputAccept="image/png,image/jpeg,image/webp,image/svg+xml"
            systemDialog
            styles={{
              button: {
                width: "100%",
                border: "2px dashed #e2e8f0",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "transparent",
                transition: "background-color 0.2s",
                ":hover": {
                  backgroundColor: "#f8fafc",
                },
              },
            }}
          >
            {({ onClick }: { onClick: () => void }) => (
              <div
                onClick={onClick}
                className={`w-full border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${
                  isUploading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <div className="text-sm text-gray-500">
                    {imageUrl ? "Change image" : "Click to upload or drag and drop"}
                  </div>
                  <div className="text-xs text-gray-400">
                    PNG, JPG, WEBP or SVG (max 5MB)
                  </div>
                </div>
              </div>
            )}
          </Widget>

          {isUploading && (
            <div className="mt-4 flex items-center text-sm text-blue-500">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Uploading image...
            </div>
          )}

          {imageUrl && !isUploading && (
            <div className="mt-4 flex items-center text-sm text-green-500">
              ✓ Image uploaded successfully
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isUploading || isSubmitting || !imageUrl || !domainName.trim()}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          "Create Domain"
        )}
      </Button>
    </form>
  );
}