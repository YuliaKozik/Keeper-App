import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ id, title, content, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await onDelete(id);
    setIsLoading(false);
  }

  return (
    <div className="note">
      <div className="card-title"><h1>{title}</h1></div>
      <div className="card-content"><p>{content}</p></div>
      <div className="card-footer">
        {isLoading ? "Deleting..." : <button onClick={handleClick}>
          <DeleteIcon />
        </button>}
      </div>

    </div>
  );
}

export default Note;
