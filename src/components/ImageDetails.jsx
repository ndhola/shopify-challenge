import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { red } from "@mui/material/colors";

const ImageDetails = ({
  imageTitle,
  dateOfCapture,
  imageUrl,
  imageExplanation,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardHeader title={imageTitle} subheader={dateOfCapture} />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={imageTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {imageExplanation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => setLiked(!liked)}
          aria-label="add to favorites"
        >
          <FavoriteIcon sx={{ color: liked ? red[500] : null }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ImageDetails;
