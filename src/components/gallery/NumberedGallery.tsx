import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NumberedGalleryProps {
  images: string[];
  projectTitle: string;
  projectId?: string;
  onImageClick: (index: number) => void;
  onOrderChange?: (newImages: string[]) => Promise<boolean> | void;
  onEditImage?: (image: string) => void;
  isEditable?: boolean;
}

export const NumberedGallery = ({
  images: externalImages,
  projectTitle,
  projectId,
  onImageClick,
  onOrderChange,
  onEditImage,
  isEditable = false,
}: NumberedGalleryProps) => {
  const { toast } = useToast();
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});
  const [images, setImages] = useState(externalImages);
  const [orderValues, setOrderValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(externalImages.map((_, i) => [i, String(i + 1)]))
  );

  // Sync with external images
  useEffect(() => {
    setImages(externalImages);
    setOrderValues(Object.fromEntries(externalImages.map((_, i) => [i, String(i + 1)])));
  }, [externalImages]);

  const handleOrderChange = (index: number, value: string) => {
    setOrderValues((prev) => ({ ...prev, [index]: value }));
  };

  const handleOrderBlur = async (index: number) => {
    const newOrder = parseInt(orderValues[index], 10);

    if (isNaN(newOrder) || newOrder < 1 || newOrder > images.length) {
      setOrderValues((prev) => ({ ...prev, [index]: String(index + 1) }));
      return;
    }

    const targetIndex = newOrder - 1;

    if (targetIndex === index) return;

    // Reorder images
    const newImages = [...images];
    const [movedImage] = newImages.splice(index, 1);
    newImages.splice(targetIndex, 0, movedImage);

    // Notify parent and save
    const result = await onOrderChange?.(newImages);

    if (result !== false) {
      setImages(newImages);
      setOrderValues(Object.fromEntries(newImages.map((_, i) => [i, String(i + 1)])));
    } else {
      // Reset on failure
      setOrderValues((prev) => ({ ...prev, [index]: String(index + 1) }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      handleOrderBlur(index);
    }
  };

  const handleReplaceClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  const handleFileChange = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !projectId) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${projectId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('project-gallery')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-gallery')
        .getPublicUrl(fileName);

      // Replace the image at the current index
      const newImages = [...images];
      newImages[index] = publicUrl;

      const result = await onOrderChange?.(newImages);

      if (result !== false) {
        setImages(newImages);
        toast({
          title: "Image replaced",
          description: "The image has been successfully replaced.",
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    }

    // Reset input
    e.target.value = '';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="aspect-square overflow-hidden group relative"
        >
          {/* Order number input - only show if editable */}
          {isEditable && (
            <>
              <div className="absolute top-2 left-2 z-10">
                <Input
                  type="text"
                  inputMode="numeric"
                  value={orderValues[index] || ""}
                  onChange={(e) => handleOrderChange(index, e.target.value)}
                  onBlur={() => handleOrderBlur(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-8 text-center bg-charcoal/80 text-cream border-cream/30 text-sm font-medium"
                />
              </div>

              {/* Action buttons container */}
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                {/* Replace/Upload Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReplaceClick(index);
                  }}
                  className="bg-charcoal/80 text-cream p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-charcoal"
                  title="Replace image"
                >
                  <span className="sr-only">Replace image</span>
                  <Upload className="w-4 h-4" />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={(el) => { fileInputRefs.current[index] = el; }}
                  onChange={(e) => handleFileChange(index, e)}
                  className="hidden"
                />

                {/* AI Edit Button */}
                {onEditImage && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditImage(image);
                    }}
                    className="bg-charcoal/80 text-cream p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-charcoal"
                    title="Redesign with AI"
                  >
                    <span className="sr-only">AI Redesign</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-wand-2"
                    >
                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                      <path d="m14 7 3 3" />
                      <path d="M5 6v4" />
                      <path d="M19 14v4" />
                      <path d="M10 2v2" />
                      <path d="M7 8H3" />
                      <path d="M21 16h-4" />
                      <path d="M11 3H9" />
                    </svg>
                  </button>
                )}
              </div>
            </>
          )}

          {/* Image */}
          <img
            src={image}
            alt={`${projectTitle} - Image ${index + 1}`}
            onClick={() => onImageClick(index)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
