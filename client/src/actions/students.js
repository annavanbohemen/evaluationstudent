import * as request from 'superagent'
import {baseUrl} from '../constants'
//import {logout} from './users'
//import {isExpired} from '../jwt'

export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS'


  const updateStudentSuccess = () => ({
    type: UPDATE_STUDENT_SUCCESS
  })

  export const getStudents = (batchId) => (dispatch, getState) => {
    //const state = getState()
    //const jwt = state.currentUser.jwt
    request
      .get(`${baseUrl}/batches/${batchId}/students`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(response => {
        dispatch({
          type: GET_STUDENTS,
          payload: response.body
        })
      })
      .catch(err => console.error(err))
  }

  export const createStudent = (student) => (dispatch, getState) => {
    //const state = getState()
    //const jwt = state.currentUser.jwt

    request
      .post(`${baseUrl}/batches/${student.batchId}/students`)
      //.set('Authorization', `Bearer ${jwt}`)
      .send(student)
      .then(response => dispatch({
          type: ADD_STUDENT,
          payload: student
      }))
      .catch(err => console.error(err))
  }

