import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { addDays, format, isWeekend } from 'date-fns';


export default function DateForm(params) {


    const [state, setState] = useState({
        selection: {
            startDate: new Date(params.startDate),
            endDate: new Date(params.endDate),
            key: 'selection'
        },

    });

    const handleSelect = (data) =>{
        console.log(data); // native Date object
    }


    return (
        <>
            <DateRangePicker
                onChange={item => setState({ ...state, ...item })}
                months={1}
                minDate={addDays(new Date(), -300)}
                maxDate={addDays(new Date(), 900)}
                onChange={handleSelect}
                direction="vertical"
                scroll={{ enabled: true }}
                ranges={[state.selection]}
                dateDisplayFormat="yyyy/M/dd"
            />;
        </>
    )

}
