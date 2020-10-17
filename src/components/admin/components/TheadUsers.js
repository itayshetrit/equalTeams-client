import React from 'react'

const TheadUsers = React.memo(() => {
    return <thead>
        <tr>
            <th>#</th>
            <th>שם</th>
            <th>ווצאפ</th>
            <th>שיחה</th>
            <th>התקפה</th>
            <th>הגנה</th>
            <th>כביסה</th>
            <th>הערות</th>
            <th>עריכה/מחיקה</th>

        </tr>
    </thead>
})
export default TheadUsers;