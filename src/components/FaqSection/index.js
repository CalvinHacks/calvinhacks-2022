import React, {useState} from 'react'
import { FaqContainer, Wrap, CardContainer, Dropdown, DataContainer } from './FaqElement';
import { Data } from './Data'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';


const FaqSection = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <IconContext.Provider value={{ color: '#8C2131'}}>
            <FaqContainer id="faq">
                <h1> Fequently asked Questions</h1>
                <CardContainer>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <DataContainer>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                        <p><AiOutlineQuestionCircle  size = '30'/></p>
                                        <h1>{item.question}</h1>
                                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <p>{item.answer}</p>
                                        </Dropdown>
                                    ) : null}
                                </DataContainer>
                            </>
                        )
                    }
                )}
            </CardContainer>
        </FaqContainer>
        </IconContext.Provider>
    )
}

export default FaqSection;
