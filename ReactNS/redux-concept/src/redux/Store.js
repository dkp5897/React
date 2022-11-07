
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducer/Counter';

export default configureStore ({
    reducer:{
        conuter: counterReducer
    }
})

