import React from 'react'

const TheadUsers = React.memo(() => {
    return <thead>
        <tr>
            <th>#</th>
            <th>שם</th>
            <th></th>
            <th></th>
            <th>A</th>
            <th>D</th>
            {/* <th>כביסה</th> */}
            <th></th>
            {/* <th>עריכה/מחיקה</th> */}

        </tr>
    </thead>
})
export default TheadUsers;