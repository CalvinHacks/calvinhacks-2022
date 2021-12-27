import React from 'react'
import { ScheduleContainer, ScheduleTableContainer, ScheduleImageContainer, ScheduleTh, ScheduleTr } from './ScheduleElement';
import { Data } from './Data'
import soon from '../../image/comingsoon.png'

const ScheduleSection = () => {
    return (
        <ScheduleContainer id="schedule">
            <ScheduleTableContainer>
                <ScheduleImageContainer>
                    <img src={soon} alt='soon'></img>
                </ScheduleImageContainer>
                {/* <table>
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
                </table> */}
            </ScheduleTableContainer>
        </ScheduleContainer>
    )
}

export default ScheduleSection;
