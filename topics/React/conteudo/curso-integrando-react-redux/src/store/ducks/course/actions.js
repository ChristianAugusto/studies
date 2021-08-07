export function setModuleLesson(module, lesson) {
    return {
        type: 'SET_ACTIVE_LESSON',
        module,
        lesson
    }
}