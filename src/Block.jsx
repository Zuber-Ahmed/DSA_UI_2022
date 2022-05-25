import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Z
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Hydrabadi Dum Biryani"
        subheader="May 25, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Hydrabadi Dum Biryani"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
