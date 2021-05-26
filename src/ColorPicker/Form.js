import React from "react";
import { useState } from "react/cjs/react.development";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
