import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { minutesToHours } from '../helpers'

const StyledTimings = styled.section`
  border-top: solid 1px ${ props => props.theme.secondaryColor };
  border-bottom: solid 1px ${ props => props.theme.secondaryColor };
  display: inline-flex;
  justify-content: space-around;
  padding: 1.5rem 0;

  @media (min-width: 768px) {
    padding: 2.75rem 0;
    margin-bottom: 5rem;

    + h2 {
      margin-top: 0;
    }
  }


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
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: 0;

      @media (min-width: 640px) {
        font-size: 1.5rem;
      }
    }

    p {
      margin-bottom: 0;
      font-size: 0.75rem;

      @media (min-width: 768px) {
        font-size: initial;
      }
    }
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 10em;
    max-height: 160px;
    margin: 0 10px;
  }

  .circular-chart__circle {
    /* TODO: Set to branded colour now it's working */
    stroke: #ffbe0b;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
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
