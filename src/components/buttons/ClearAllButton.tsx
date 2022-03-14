import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveAll } from "../../types";

type ClearAllButtonProps = {
  removeAll: RemoveAll;
};

function ClearAllButton({ removeAll }: ClearAllButtonProps) {
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
