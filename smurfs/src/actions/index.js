/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const GETTING_SMURFS = 'GET_SMURFS'
export const GOT_SMURFS = 'GOT_SMURFS'
export const POST_SMURFS = 'POST_SMURFS'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () =>  dispatch => {

  axios
    .get(`http://localhost:3333/smurfs`)
    .then( res => {
      dispatch({ type: GOT_SMURFS, payload: res.data})
    })
    .catch( err => {
      console.log(err)
    })
}

export const addSmurfs = (newSmurf) => dispatch => {

  axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({ type: POST_SMURFS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
    })
}
