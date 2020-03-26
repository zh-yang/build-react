import React from 'react';
import { VTable } from '@servyou/smurfs'
import '@servyou/smurfs/dist/smurfs.min.css'

const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        // fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        // fixed: 'left',
    },
    // {
    //     title: 'Column 1',
    //     dataIndex: 'address1',
    //     key: '1',
    //     width: 100,
    // },
    // {
    //     title: 'Column 2',
    //     dataIndex: 'address2',
    //     key: '2',
    //     width: 100,
    // }
];
const data = [];
for (let i = 0; i < 2000; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

export default class App extends React.Component {
  render() {
    return (
      <VTable
        bordered columns={columns} dataSource={data} 
        renderId={''}
        preShowCount={20}
        showCount={10}
        timeout={0}
        lineHeight={44}
        bodyHeight={300}
        pagination={{defaultPageSize: 1000}}
      />
    )
  }
}