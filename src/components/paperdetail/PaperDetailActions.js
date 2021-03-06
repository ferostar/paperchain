import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import paperchain from '../../util/paperchain'
import store from '../../store'
const fileDownload = require("js-file-download")

export function getPaper(hash) {
  return function (dispatch) {
    paperchain.getPaper(hash).then(action => {
      dispatch(getInfo(action.paper))
    }).catch(error => {
      console.error(error)
    })
  }
}

function getInfo(paper) {
  return function (dispatch) {
    Promise.all([
      dispatch(getQuotesMadeByPaper(paper)),
      dispatch(getQuotesReceivedByPaper(paper)),
      dispatch(getReviews(paper)),
      dispatch(watchReviews(paper)),
    ])
  }
}

export function getQuotesMadeByPaper(paper) {
  return dispatch => {
    paperchain.getQuotesMadeByPaper(paper).then(quotes => {

    }).catch(error => {
      console.error(error)
    })
  }
}

export function getQuotesReceivedByPaper(paper) {
  return dispatch => {
    paperchain.getQuotesReceivedByPaper(paper).then(quotes => {

    }).catch(error => {
      console.error(error)
    })
  }
}

export function getReviews(paper) {
  return dispatch => {
    paperchain.getReviews(paper).then(reviews => {

    }).catch(error => {

    })
  }
}

export function watchReviews(paper) {
  return dispatch => {
    paperchain.watchReviews(paper).then(reviews => {

    }).catch(error => {
      console.error(error)
    })
  }
}

export function reviewPaper(paper) {
  return dispatch => {
    paperchain.reviewPaper(paper).then(() => {

    }).catch(error => {
      console.error(error)
    })
  }
}

export function downloadPaper(paper) {
  return async dispatch => {
    const storage = store.getState().storage.storage
    const web3 = store.getState().web3.instance
    const multihash = web3.toAscii(paper.multihash)
    const raw = await storage.cat(multihash)

    fileDownload(raw, paper.name)
  }
}
