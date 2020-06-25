import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { setModuleLesson } from '../../store/ducks/course/actions';



function Sidebar() {
    const modules = useSelector(state => state.course.modules)
    const dispatch = useDispatch()


    return (
        <aside>
            { modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        { module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => dispatch(setModuleLesson(module, lesson))}>Selecionar</button>
                            </li>
                        )) }
                    </ul>
                </div>
            )) }
        </aside>
    )
}



export default Sidebar