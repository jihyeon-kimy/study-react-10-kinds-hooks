import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function CheckInput() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Jihyeon", maxLen);

  return (
    <>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
    </>
  );
}

export default CheckInput;
