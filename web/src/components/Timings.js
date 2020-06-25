import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { minutesToHours } from '../helpers'

const StyledTimings = styled.section`
  border-top: solid 1px ${ props => props.theme.secondaryColor };
  border-bottom: solid 1px ${ props => props.theme.secondaryColor };
  display: inline-flex;
  justify-content: space-around;
  padding: 2.75rem 0 ;

  .circular-chart__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      position: absolute;
      text-align: center;
    }

    h2 {
      margin-bottom: 0.5em;
    }

    p {
      margin-bottom: 0;
    }
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 10em;
    max-height: 160px;
  }

  .circular-chart__circle {
    /* TODO: Set to branded colour now it's working */
    stroke: #4CC790;
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }
`

// TODO: Move to helpers file
const percentage = (total, item) => ( Math.round((item / total) * 100) )

const Timings = (props) => {
  // Destructure the props here so we can loop over the props later
  const { prep, cook } = props

  return (
    <StyledTimings>
      {Object.entries(props).map(([key, value]) =>
        <div className='circular-chart__wrapper'>
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path className="circular-chart__circle"
              stroke-dasharray={`${percentage(prep + cook, value)}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div>
          <h2>{ key }</h2>
            <p>{ minutesToHours(value) }</p>
          </div>
        </div>
      )}

      {/* Total */}
      <div className='circular-chart__wrapper'>
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path className="circular-chart__circle"
            stroke-dasharray={`${percentage(prep + cook, prep + cook)}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div>
        <h2>Total</h2>
          <p>{ minutesToHours(prep + cook) }</p>
        </div>
      </div>
    </StyledTimings>
  )
}

Timings.propTypes = {
  prep: PropTypes.number,
  cook: PropTypes.number,
}

export default Timings
