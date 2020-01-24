
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const [newCourse, setNewCourse ] = useState("");

  const addCourse = () => {
    dispatch({ type: "ADD_COURSE", newCourse });
  }

  return(
    <>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
          </li>
        ))}
      </ul>
      <input type="text" value={newCourse} onChange={event => setNewCourse(event.target.value)} />
      <button type="button" onClick={addCourse}>
        Adicionar Curso
      </button>
    </>
  );
};