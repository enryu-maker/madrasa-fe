const initialState = {
    access: null,
    madrasa: {},
    courses: [],
    student: [],
    fees: [],
    teacher: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCESS':
            return { ...state, access: action.payload };
        case 'SET_MADRASA':
            return { ...state, madrasa: action.payload };
        case 'GET_COURSES':
            return { ...state, courses: action.payload }
        case 'GET_STUDENT':
            return { ...state, student: action.payload };
        case 'GET_FEES':
            return { ...state, fees: action.payload };
        case 'GET_TEACHER':
            return { ...state, teacher: action.payload };
        default:
            return state;
    }
};