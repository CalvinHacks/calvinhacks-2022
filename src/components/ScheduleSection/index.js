import React from 'react'
import { ScheduleContainer, ScheduleTableContainer,
    ThRight, Thleft} from './ScheduleElement';
import { Data } from './Data'
import {Data1} from './Data1'

const ScheduleSection = () => {
    return (
        <ScheduleContainer id="schedule">
            <ScheduleTableContainer>
                <h4>Note: All times are in Eastern Standard Time</h4>
                <h1>Day 1 - Friday, March 25</h1>
                <hr/>
                <table>
                    {/* <thead>
                        <ScheduleTh> Time </ScheduleTh>
                        <ScheduleTh> Description </ScheduleTh>
                        <ScheduleTh> Location </ScheduleTh>
                    </thead> */}
                    <tbody>
                        {Data.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <Thleft>
                                                <h4>
                                                    {item.time}
                                                </h4>
                                                <p>
                                                    {item.location}
                                                </p>
                                            </Thleft>
                                            <ThRight>
                                                <h4>
                                                    {item.event}
                                                </h4>
                                                {!item.hasOwnProperty('link') && !item.hasOwnProperty('linkWord')?
                                                  <p>{item.description}</p> :
                                                  <p>{item.description} <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkWord}</a></p>
                                                }
                                            </ThRight>
                                        </tr>
                                    </>
                                )
                            }
                        )}
                    </tbody>
                </table>
                
                <h1>Day 2 - Saturday, March 26</h1>
                <hr/>

                <table>
                    {/* <thead>
                        <ScheduleTh> Time </ScheduleTh>
                        <ScheduleTh> Description </ScheduleTh>
                        <ScheduleTh> Location </ScheduleTh>
                    </thead> */}
                    <tbody>
                        {Data1.map((item, index) => {
                                return (
                                    <>
                                        <tr>
                                            <Thleft>
                                                <h4>
                                                    {item.time}
                                                </h4>
                                                <p>
                                                    {item.location}
                                                </p>
                                            </Thleft>
                                            <ThRight>
                                                <h4>
                                                    {item.event}
                                                </h4>
                                                {!item.hasOwnProperty('link') && !item.hasOwnProperty('linkWord')?
                                                  <p>{item.description}</p> :
                                                  <p>{item.description} <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkWord}</a></p>
                                                }
                                            </ThRight>
                                        </tr>
                                    </>
                                )
                            }
                        )}
                    </tbody>
                </table>
            <p>*The schedule may be subject to change</p>
            </ScheduleTableContainer>
        </ScheduleContainer>
    )
}

export default ScheduleSection;
