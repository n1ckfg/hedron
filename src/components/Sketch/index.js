import React from 'react'
import Param from '../../containers/Param'
import Shot from '../../containers/Shot'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  height: 100%;
  flex-direction: column;
`

const Items = styled.div`
  display: flex;
  align-items: stretch;
`

const Bottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`

const Sketch = ({ title, params, shots, onDeleteClick, sketchId }) => (
  <Wrapper>
    <h2>{title}</h2>

    <Items>
      {params.map((id) => (
        <Param paramId={id} key={id} />
      ))}
    </Items>

    <Items>
      {shots.map((id) => (
        <Shot shotId={id} key={id} />
      ))}
    </Items>

    <Bottom>
      <button onClick={onDeleteClick}>Delete Sketch</button>
    </Bottom>
  </Wrapper>
)

Sketch.propTypes = {
  title: React.PropTypes.string.isRequired,
  sketchId: React.PropTypes.string.isRequired,
  params: React.PropTypes.arrayOf(
    React.PropTypes.string
  ).isRequired,
  shots: React.PropTypes.arrayOf(
    React.PropTypes.string
  ).isRequired,
  onDeleteClick: React.PropTypes.func.isRequired

}

export default Sketch
