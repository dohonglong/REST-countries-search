import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import { Button } from "@mui/material";

const GoBackButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="button-action">
      <Button
        size="large"
        variant="contained"
        onClick={handleClick}
        startIcon={<HomeIcon />}
      >
        Go back
      </Button>
    </div>
  );
};

export default GoBackButton;
