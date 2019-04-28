import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import ForecastItem from '../ForecastItem'

import { IForecast } from '../../types'

interface IForecastListProps {
  locations: IForecast[]
  loading: boolean
}

const ForecastListContainer = styled.table`
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-top: 20px;
  width: 100%;
  tr:nth-child(2n + 1) {
    background: rgba(117, 169, 255, 0.05);
  }
  tr:first-child {
    background: transparent;
    border-bottom: 1px solid rgba(117, 169, 255, 0.05);
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ForecastRow = styled.tr`
  display: flex;
  flex-wrap: no-wrap;
  flex-grow: 0;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0px;
  th {
    font-weight: 700;
  }
  td {
    animation: 1s ${fadeIn} ease-out;
  }
  td,
  th {
    overflow: hidden;
    padding: 10px;
    width: 40px;
    list-style: none;
    flex-grow: 1;
    white-space: nowrap;
    text-align: center;
    font-size: 18px;
  }
  th:first-child,
  td:first-child {
    width: 100px;
    text-align: left;
  }
`

export function convertUnixTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000)
  const hour = date.getHours()
  const formattedHour = hour < 10 ? `0${hour}` : hour
  return `${formattedHour}:00`
}

export function ForecastList(props: IForecastListProps) {
  const { locations, loading } = props
  const headings =
    locations.length > 0 &&
    locations[0].list.map(item => {
      return (
        <th
          key={`${item.main.sea_level}-${item.dt}-${item.wind.speed}-${
            item.main.pressure
          }`}>
          {convertUnixTimestamp(item.dt)}
        </th>
      )
    })
  return (
    <ForecastListContainer>
      <tbody>
        <ForecastRow>
          <th>City</th>
          {headings}
        </ForecastRow>
        {locations.map((location, i) => (
          <ForecastRow key={`${location.displayName}-${i}`}>
            <ForecastItem data={location} />
          </ForecastRow>
        ))}
        {loading && (
          <ForecastRow>
            <td>&nbsp;</td>
          </ForecastRow>
        )}
      </tbody>
    </ForecastListContainer>
  )
}
