import { connect } from 'react-redux'
import MacroItem from '../../components/MacroItem'
import getMacro from '../../selectors/getMacro'
import getIsMacroOpened from '../../selectors/getIsMacroOpened'
import getNode from '../../selectors/getNode'
import getNodeInputLinkIds from '../../selectors/getNodeInputLinkIds'
import { rMacroLearningToggle, uMacroDelete, rMacroOpenToggle } from '../../store/macros/actions'
import { values } from 'lodash'

const mapStateToProps = (state, ownProps) => {
  const macro = getMacro(state, ownProps.id)
  const inputLinkIds = getNodeInputLinkIds(state, macro.nodeId)
  const paramLinks = values(macro.targetParamLinks)
  const node = getNode(state, macro.nodeId)

  return {
    nodeId: macro.nodeId,
    title: node.title,
    isOpen: getIsMacroOpened(state, ownProps.id),
    macroId: macro.id,
    paramLinks,
    inputLinkIds,
    inputSettingsAreVisible: inputLinkIds.length > 0,
    paramLinksAreVisible: paramLinks.length > 0,
    isLearning: state.macros.learningId === ownProps.id,
    numInputs: inputLinkIds.length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLearningClick: () => { dispatch(rMacroLearningToggle(ownProps.id)) },
  onDeleteClick: () => { dispatch(uMacroDelete(ownProps.id)) },
  onOpenClick: () => { dispatch(rMacroOpenToggle(ownProps.id)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual: (next, prev) =>
      next.nodes === prev.nodes &&
      next.macros.learningId === prev.macros.learningId &&
      next.macros.openedId === prev.macros.openedId
  }
)(MacroItem)
