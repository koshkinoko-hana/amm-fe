import {
  clearEmployeeAction,
  deleteEmployeeAction,
  fetchEmployeeAction,
  fetchEmployeeListAction, fetchEmployeeOptionsAction, saveEmployeeAction,
  setEmployeeAction, updateEmployeeAction,
} from '@admin/ducks/actions/employee'
import { Employee, EmployeeState } from '@admin/ducks/types/employee'
import { Option } from '@common/components/select/types'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'


const initialState: EmployeeState = {
  employees: [],
  options: [],
  loading: false
}

const employee = createReducer(initialState, {
  [fetchEmployeeListAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [fetchEmployeeListAction.SUCCESS]: (state, action: PayloadAction<{employees: Employee[]}>) => {
    const { employees } = action.payload
    return { ...state, loggedIn: true, loading: false, employees }
  },
  [fetchEmployeeListAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
  [fetchEmployeeOptionsAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [fetchEmployeeOptionsAction.SUCCESS]: (state, action: PayloadAction<{options: Option[]}>) => {
    const { options } = action.payload
    return { ...state, loggedIn: true, loading: false, options }
  },
  [fetchEmployeeOptionsAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
  [fetchEmployeeAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [fetchEmployeeAction.SUCCESS]: (state, action:  PayloadAction<{employee: Employee}>) => {
    return { ...state, current: action.payload.employee, loading: false }
  },
  [fetchEmployeeAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
  [saveEmployeeAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [updateEmployeeAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [saveEmployeeAction.SUCCESS]: (state) => {
    return { ...state, loading: false }
  },
  [updateEmployeeAction.SUCCESS]: (state, action: PayloadAction<Employee>) => {
    return { ...state, loading: false, current: action.payload }
  },
  [saveEmployeeAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
  [updateEmployeeAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },
  [setEmployeeAction.type]: (state, action: PayloadAction<Employee | undefined>) => {
    return { ...state, current: action.payload }
  },
  [setEmployeeAction.type]: (state, action: PayloadAction<Employee | undefined>) => {
    return { ...state, current: action.payload }
  },
  [clearEmployeeAction.type]: (state) => {
    return { ...state, current: undefined }
  },
  [deleteEmployeeAction.TRIGGER]: (state) => {
    return { ...state, loading: true }
  },
  [deleteEmployeeAction.SUCCESS]: (state, action: PayloadAction<{ id: number }>) => {
    const id = action.payload.id
    state.employees = state.employees.filter(employee => employee.id !== id)
    state.loading = false
  },
  [deleteEmployeeAction.FAILURE]: (state) => {
    return { ...state, loading: false }
  },

})

export default employee
