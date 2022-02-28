import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const BookmarksButton = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div className="button-action">
      <Button variant="contained">
        <Link to="/country/bookmarks" style={linkStyle}>
          Bookmarks
        </Link>
      </Button>
    </div>
  );
};

export default BookmarksButton;
