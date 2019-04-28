import * as React from 'react'

import jsonp from 'jsonp'

import { AutoComplete, Button } from 'antd'
import styled from 'styled-components'

const Input = styled(AutoComplete)`
  width: 100%;
  margin-right: 10px;
`

const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  margin: 0 auto;
  width: 100%;
`

interface ISearchProps {
  handleSubmit: (query: string) => {}
  loading: boolean
}

interface ISearchState {
  query: string
  suggestions: string[]
}

function throttled(delay: number, fn: any) {
  let lastCall = 0
  return (...args: any[]) => {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export class Search extends React.Component<ISearchProps, ISearchState> {
  public readonly state: ISearchState
  public getSuggestionsThrottled: () => {}

  constructor(props: ISearchProps) {
    super(props)
    this.state = {
      query: '',
      suggestions: [],
    }

    this.getSuggestionsThrottled = throttled(200, this.getSuggestions)
  }

  public handleChange = (query: any) => {
    this.setState(prevState => ({ ...prevState, query }), this.getSuggestions)
  }

  public handleSearchButtonPress = () => {
    const { handleSubmit } = this.props
    const { query } = this.state
    this.setState(prevState => ({ ...prevState, query: '' }))
    handleSubmit(query)
  }

  public getSuggestions = async () => {
    const { query } = this.state
    if (query.length > 2) {
      jsonp(
        `https://cors.io/?http://autocompletecity.geobytes.com/AutoCompleteCity?sort=size&template=<geobytes%20city>,%20<geobytes%20internet>&q=${
          this.state.query
        }`,
        undefined,
        (err: Error | null, data: string[]) => {
          if (err) {
            return
          }
          if (data && data[0].length === 0) {
            this.setState(prevState => ({ ...prevState, suggestions: [] }))
            return
          }
          const suggestions = [
            ...new Set(data.length > 10 ? data.slice(0, 10) : data),
          ]
          this.setState(prevState => ({
            ...prevState,
            suggestions,
          }))
        }
      )
    }
  }

  public render() {
    const { query, suggestions } = this.state
    const { loading } = this.props
    return (
      <SearchContainer>
        <Input
          placeholder="New York, US"
          dataSource={suggestions}
          value={query}
          onChange={this.handleChange}
        />
        <Button
          disabled={loading}
          type="primary"
          onClick={this.handleSearchButtonPress}>
          Search
        </Button>
      </SearchContainer>
    )
  }
}
