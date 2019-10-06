import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
//리엑트에서 제공하는 아이콘을 사용할 수 있다. https://react-icons.netlify.com/#/icons/md
import "./TodoInsert.scss";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
      e => {
          onInsert(value);
          setValue('');

          e.preventDefault();

      },
      [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
