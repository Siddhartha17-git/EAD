import { useState } from "react";

function Child({ label }) {
  return <div>Child received: {label}</div>;
}

export default function StatePropsDemo() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>State and Props Demo</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child label={text} />
    </div>
  );
}
