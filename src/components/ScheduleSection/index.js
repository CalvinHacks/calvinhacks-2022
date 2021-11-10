import React from 'react'
import { ScheduleContainer, ScheduleTableContainer, ScheduleTh, ScheduleTr } from './ScheduleElement';
import { Data } from './Data'

const ScheduleSection = () => {
    return (
        <ScheduleContainer id="schedule">
            <ScheduleTableContainer>
                <table>
                    <thead>
                        <ScheduleTh> Time </ScheduleTh>
                        <ScheduleTh> Description </ScheduleTh>
                        <ScheduleTh> Location </ScheduleTh>
                    </thead>
                    <tbody>
                        {Data.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th>{item.time}</th>
                                            <th>{item.event}</th>
                                            <th>{item.location}</th>
                                        </tr>
                                    </>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </ScheduleTableContainer>
        </ScheduleContainer>
    )
}

export default ScheduleSection;
