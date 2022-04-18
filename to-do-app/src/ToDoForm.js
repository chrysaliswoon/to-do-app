import { useState } from "react";

export default function TodoForm({ addTodo }) {
  //? The first is the “value” and the second is how you are going to be setting the state. The state starts off empty, and as you add things to your state, it will add it to your list of to-do items.

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
