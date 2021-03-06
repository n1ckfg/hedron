import React from 'react'
import PropTypes from 'prop-types'
import Param from '../../containers/Param'
import InputLinkUI from '../../containers/InputLinkUI'

const SketchParam = ({ nodeId, sketchId }) => (
  <Param nodeId={nodeId} sketchId={sketchId}>
    <InputLinkUI nodeId={nodeId} />
  </Param>
)

SketchParam.propTypes = {
  nodeId: PropTypes.string.isRequired,
  sketchId: PropTypes.string.isRequired
}

export default SketchParam
