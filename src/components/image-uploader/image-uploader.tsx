import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useTranslation } from "react-i18next";
import "./image-uploader.scss";

interface EnhancedImageUploaderProps {
  images: string[];
  onOpenGallery: (e: React.MouseEvent) => void;
  onDeleteImage: (image: string) => void;
  maxImages?: number;
}

export default function ImageUploader({
  images,
  onOpenGallery,
  onDeleteImage,
  maxImages = Infinity,
}: EnhancedImageUploaderProps) {
  const { t } = useTranslation();

  return (
    <Box className="enhanced-image-uploader">
      <Box className="uploader-header">
        <Typography variant="h6">{t("Product Images")}</Typography>
        {maxImages !== Infinity && (
          <Typography variant="body2" color="text.secondary">
            {images?.length} / {maxImages} {t("images")}
          </Typography>
        )}
      </Box>

      <Paper elevation={0} className="images-container">
        <Grid container spacing={2}>
          {/* Selected images */}
          {images?.map((image, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={`image-${index}`}>
              <Box className="image-item">
                <img src={image} alt={`Product ${index}`} />
                <Tooltip title={t("Remove image")}>
                  <IconButton
                    onClick={() => onDeleteImage(image)}
                    className="delete-button"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          ))}

          {/* Add image button - only show if under max limit */}
          {images?.length < maxImages && (
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Button
                className="add-image-button"
                onClick={onOpenGallery}
                variant="outlined"
                fullWidth
              >
                <Box className="add-button-content">
                  <AddPhotoAlternateIcon />
                  <Typography >{t("Add Images")}</Typography>
                </Box>
              </Button>
            </Grid>
          )}

          {/* Empty state when no images */}
          {images?.length === 0 && (
            <Grid item xs={12}>
              <Box className="empty-state">
                <AddPhotoAlternateIcon fontSize="large" />
                <Typography variant="body1">
                  {t("No images selected")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("Click the button above to add images from gallery")}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
}
