import React from 'react'
import { checkPropTypes } from 'prop-types';

const TheadUsers = React.memo((props) => {
    return <thead>
        <tr>
            <th>#</th>
            {/* <th>קבוצה {props.num}</th> */}
            <th>שם</th>
        </tr>
    </thead>
})
export default TheadUsers;