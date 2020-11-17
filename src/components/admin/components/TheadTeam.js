import React from 'react'

const TheadUsers = React.memo((props) => {
    return <thead>
        <tr>
            <th>#</th>
            <th>שם</th>
        </tr>
    </thead>
})
export default TheadUsers;