import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './ToDoSlice'

import React from 'react'

export default configureStore ({
  reducer: {
    todos: ToDoReducer,
  },
})
