const INITIAL_STATE ={
    customer: {},
};



function shop (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CUSTUMER': {
            //logica
        }

        default:
            return state;
    }

}