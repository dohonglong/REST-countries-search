import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ClearAllButton({ removeAll }) {
  return (
    <div className="button-action">
      <Button
        size="large"
        variant="contained"
        color="error"
        onClick={() => removeAll()}
        startIcon={<DeleteIcon />}
      >
        Remove All
      </Button>
    </div>
  );
}

export default ClearAllButton;
