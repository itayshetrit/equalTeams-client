import React from 'react'

const Thead = React.memo(() => {
    console.log("Thead component render")
    return <thead>
        <tr>
            <th>#</th>
            <th>שם</th>
            <th>ווצאפ</th>
            <th>שיחה</th>
            <th>מספר</th>
            <th>הוזמנו</th>
            <th>קירבה</th>
            <th>אישרו</th>
            <th>שולחן</th>
            <th>הגיעו</th>
            <th>מתנה</th>
            <th>הערות</th>
            <th>עריכה/מחיקה</th>

        </tr>
    </thead>
})
export default Thead;