import React from 'react';
import styled from 'styled-components';
import Table from './Table';
import pitchers from './pitchers'

const Styles = styled.div`
  padding: 3rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Pitchers',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Position',
            accessor: 'position',
          },
          {
            Header: 'Rating',
            accessor: 'rating',
          },
          {
            Header: 'Power',
            accessor: 'pow',
          },
          {
            Header: 'Contact',
            accessor: 'con',
          },
          {
            Header: 'Speed',
            accessor: 'spd',
          },
          {
            Header: 'Fielding',
            accessor: 'fld',
          },
          {
            Header: 'Velocity',
            accessor: 'vel',
          },
          {
            Header: 'Junk',
            accessor: 'jnk',
          },
          {
            Header: 'Accuracy',
            accessor: 'acc',
          },
          {
            Header: 'Arsenal',
            accessor: 'arsenal',
          },
          {
            Header: 'Trait 1',
            accessor: 'trait1',
          },
          {
            Header: 'Trait 2',
            accessor: 'trait2',
          },
          {
            Header: 'Bats',
            accessor: 'bat',
          },
          {
            Header: 'Throws',
            accessor: 'throw',
          },
          {
            Header: 'Salary',
            accessor: 'salary',
          },
          {
            Header: 'Team',
            accessor: 'team',
          },
        ],
      },
    ],
    []
  )


  return (
    <Styles>
      <Table columns={columns} data={pitchers} />
    </Styles>
  )
}

export default App
