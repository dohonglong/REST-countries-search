import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const GoBackButton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="button-action">
      <Button size="large" variant="contained" onClick={handleClick}>
        Go back
      </Button>
    </div>
  );
};

export default GoBackButton;
