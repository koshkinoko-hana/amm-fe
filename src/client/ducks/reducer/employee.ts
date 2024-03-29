import {
  fetchEmployeeAction,
} from '@client/ducks/actions/employee'
import { Employee, EmployeeState } from '@client/ducks/types/employee'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'


const initialState: EmployeeState = {
  employees: [],
  loading: false
}

const employee = createReducer(initialState, {
  [fetchEmployeeAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [fetchEmployeeAction.SUCCESS]: (state, action:  PayloadAction<{employee: Employee}>) => {
    return { ...state, current: action.payload.employee, loading: false }
  },
  [fetchEmployeeAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
})

export default employee
