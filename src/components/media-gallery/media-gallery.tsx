import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import "./media-gallery.scss";
import { useEffect, useState } from "react";
import {
  deleteStorageImages,
  getStorageGallery,
  uploadStorageImage,
} from "state/api-calls/storage-calls";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from "browser-image-compression";

type Props = {
  open: boolean;
  onClose: () => void;
  images: string[];
  onSave: (imageUrls: string[]) => void;
  limitSelection?: number;
};

// Add this helper function outside your component
export default function MediaGallery({
  open,
  onClose,
  onSave,
  images,
  limitSelection = Infinity,
}: Props) {
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    // For showing temporary preview images while uploading
    const filesToProcess = Array.from(selectedFiles);
    const tempImageUrls = filesToProcess.map((file) =>
      URL.createObjectURL(file)
    );
    setUploadingImages(tempImageUrls);

    const formData = new FormData();

    // Compress each file before uploading
    for (let i = 0; i < filesToProcess.length; i++) {
      const file = filesToProcess[i];

      // Options for compression
      const options = {
        maxWidthOrHeight: 800, // Resize if larger than 800px
        useWebWorker: true, // Use web workers for better performance
        fileType: "image/jpeg", // Convert all images to JPEG format
      };

      // Compress the image
      const compressedFile = await imageCompression(file, options);

      // Add to form data with the same field name your API expects
      formData.append("images", compressedFile);
    }

    await uploadStorageImage(formData, dispatch);
    await getStorageGallery(dispatch);

    event.target.value = null;

    // Clean up temporary URLs to prevent memory leaks
    tempImageUrls.forEach((url) => URL.revokeObjectURL(url));

    // Clear upload state
    setUploadingImages([]);
  };

  const storageFiles = useSelector((state: any) => state.storage.files);

  // Local state to track which images are selected.
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  useEffect(() => {
    setSelectedImages(images);
  }, [images]);

  useEffect(() => {
    getStorageGallery(dispatch);
  }, [dispatch]);

  // Toggle the selection of an image.
  const handleImageToggle = (imageUrl: string) => {
    setSelectedImages((prev) => {
      if (prev.includes(imageUrl)) {
        return prev.filter((url) => url !== imageUrl);
      } else if (prev.length < limitSelection) {
        return [...prev, imageUrl];
      } else {
        return prev; // Ignore if limit is reached
      }
    });
  };

  // Handle save, sending selected images to the parent component.
  const handleSave = () => {
    onSave(selectedImages);
    onClose();
    setSelectedImages([]);
  };

  // State to track uploading status
  const [uploadingImages, setUploadingImages] = useState<string[]>([]);

  const [isDeleting, setIsDeleting] = useState(false);

  // Add this function to handle individual image deletion
  const handleDeleteImage = async (imageUrl: string) => {
    setIsDeleting(true);
    const dataToSend = { imagesUrls: [imageUrl] };
    await deleteStorageImages(dataToSend, dispatch);

    // Update selected images if the deleted image was selected
    setSelectedImages((prev) => prev.filter((url) => url !== imageUrl));

    // Refresh gallery
    await getStorageGallery(dispatch);

    setIsDeleting(false);
  };
  // Add this function to handle bulk deletion of selected images
  const handleDeleteSelected = async () => {
    if (selectedImages.length === 0) return;

    try {
      setIsDeleting(true);
      const dataToSend = { imagesUrls: selectedImages };
      await deleteStorageImages(dataToSend, dispatch);

      // Clear selection
      setSelectedImages([]);

      // Refresh gallery
      await getStorageGallery(dispatch);
    } catch (error) {
      console.error("Bulk delete failed:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle
        className="dialog-title"
        sx={{ m: 0, p: 2 }}
        id="customized-dialog-title"
      >
        Media Gallery
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 2 }} dividers>
        <div className="uploadArea">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
          />
          <h4>
            drag & drop or <span>choose file</span> to upload
          </h4>
          <h5>PNG or JPG, JPEG</h5>
        </div>
        {/* History Images Section with Multi-Select */}
        <Box mt={5}>
          <Grid container spacing={4}>
            {uploadingImages.map((tempUrl, index) => (
              <Grid item key={`uploading-${index}`} xs={6} sm={4} md={3}>
                <Card
                  sx={{
                    p: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        height: "4px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "30%",
                          height: "100%",
                          backgroundColor: "#1976d2",
                          animation: "loading 1.5s infinite",
                          "@keyframes loading": {
                            "0%": {
                              transform: "translateX(-100%)",
                            },
                            "100%": {
                              transform: "translateX(400%)",
                            },
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    height="160"
                    sx={{
                      borderRadius: "10px",
                      filter: "blur(2px)",
                    }}
                    image={tempUrl}
                    alt={`uploading-${index}`}
                  />
                </Card>
              </Grid>
            ))}

            {storageFiles.map((imageUrl, index) => {
              const isSelected = selectedImages.includes(imageUrl);
              return (
                <Grid item key={index} xs={6} sm={4} md={3}>
                  <Card
                    sx={{
                      border: isSelected
                        ? "2px solid #1976d2"
                        : "2px solid transparent",
                      borderRadius: "10px",
                      transition: "border 0.3s",
                      p: 0,
                      backgroundColor: isSelected ? "#D0D0D0" : "#ffffff",
                      "&:hover": { backgroundColor: "#F0F0F0" },
                      position: "relative",
                    }}
                  >
                    <CardActionArea onClick={() => handleImageToggle(imageUrl)}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={imageUrl}
                        alt={`history-${index}`}
                      />
                    </CardActionArea>
                    {/* Add delete button */}
                    <Tooltip title="Delete image">
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteImage(imageUrl);
                        }}
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "rgba(255,255,255,0.7)",
                          "&:hover": {
                            backgroundColor: "rgba(255,0,0,0.1)",
                          },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          width: "100%",
          position: "relative",
          justifyContent: "flex-end",
          px: 3,
        }}
      >
        {/* Left side - Delete selected button */}
        <Button
          onClick={handleDeleteSelected}
          color="error"
          sx={{
            position: "absolute",
            left: "2%",
            fontWeight: 500,
          }}
          disabled={selectedImages.length === 0 || isDeleting}
          startIcon={
            isDeleting ? <CircularProgress size={20} /> : <DeleteIcon />
          }
        >
          Delete Selected ({selectedImages.length})
        </Button>
        {/* Centered Selected Counter */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: 500,
          }}
        >
          Selected: {selectedImages.length}
          {limitSelection !== Infinity ? ` / ${limitSelection}` : ""}
        </Box>
        {/* Buttons on the right */}
        <Box display="flex" gap={2}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
