import { connect } from 'react-redux'
import PaperDetail from './PaperDetail'
import { getPaper, getQuotesMadeByPaper, getQuotesReceivedByPaper, getReviews, watchReviews, reviewPaper, downloadPaper } from './PaperDetailActions'

const mapStateToProps = (state, ownProps) => {
  return {
    hash: ownProps.hash,
    paper: state.detail.paper,
    quotesMade: state.detail.quotesMade,
    quotesReceived: state.detail.quotesReceived,
    reviews: state.detail.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPaper: hash => dispatch(getPaper(hash)),
    getQuotesMadeByPaper: paper => dispatch(getQuotesMadeByPaper(paper)),
    getQuotesReceivedByPaper: paper => dispatch(getQuotesReceivedByPaper(paper)),
    getReviews: paper => dispatch(getReviews(paper)),
    watchReviews: paper => dispatch(watchReviews(paper)),
    reviewPaper: paper => dispatch(reviewPaper(paper)),
    downloadPaper: paper => {
      event.preventDefault()

      dispatch(downloadPaper(paper))
    }
  }
}

const PaperDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaperDetail)

export default PaperDetailContainer
