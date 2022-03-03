import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import { Button } from "@mui/material";

const BookmarksButton = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div className="button-action">
      <Button size="large" variant="contained" startIcon={<StarIcon />}>
        <Link to="/country/bookmarks" style={linkStyle}>
          Bookmarks
        </Link>
      </Button>
    </div>
  );
};

export default BookmarksButton;
