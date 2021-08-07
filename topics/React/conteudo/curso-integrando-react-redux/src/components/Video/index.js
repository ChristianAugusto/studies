import React from 'react';
import { useSelector } from 'react-redux'



function Video() {
    const { activeModule, activeLesson } = useSelector(state => state.course)

    return (
        <div>
            <strong>Módulo {activeModule.title}</strong>
            <span>Aula { activeLesson.title }</span>
        </div>
    )
}



export default Video