import React from 'react';
import _ from "lodash";
function TableBody(props) {

    const {filtermovies , columns} = props

    let cellChoose = (item , column) => {
        if(column.content) return column.content(item)
        return _.get(item , column.path)
         
    };
    return ( 
        <tbody>
       {filtermovies.map(item => <tr>
        {/* <th scope="row">{filtermovies.indexOf(item) +1}</th> */}
        {columns.map(column => <td>{cellChoose(item , column)}</td>)}
       </tr>)}
      </tbody>
     );
}

export default TableBody;