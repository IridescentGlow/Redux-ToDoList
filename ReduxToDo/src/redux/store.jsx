import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todoSlice';
import ToDoReducer from './ToDoSlice'

import React from 'react'

export default configureStore ({
  reducer: {
    todos: ToDoReducer,
  },
})
