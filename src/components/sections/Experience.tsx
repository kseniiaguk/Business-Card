import React from 'react';
import Lists from '../../Lists';
import translationsEng from '../../translations/eng.json'
import translationsRu from '../../translations/ru.json'
import Icon from '../Icon';
import './Experience.css'

interface IExperience {
    translations: typeof translationsEng | typeof translationsRu,
    mode: 0 | 1,
}

const Experience: React.FC<IExperience> = ({ translations, mode }) => {

    type workType = typeof translations.experience;

    const workList: {
        time: [[number, number], [number, number]],
        header: string,
        responsibilities: string[]
    }[] = Lists.experience

    function renderWorkContainers(time: [[number, number], [number, number]], work: string, responsibilities: string[], index: number) {
        const leftContainer: React.ReactElement = <div className='left work-container'>
            <div className='background-layer'></div>
            <div className='blue-container' style={{ "position": "relative", "zIndex": 2 }}>
                <h4 className='work-timing' >{translations.common.months[time[0][0] - 1]} {time[0][1]}
                    — {translations.common.months[time[1][0] - 1]} {time[1][1]}</h4>
                <h3 className='work-header'>{translations.experience[work as keyof workType]}</h3>
            </div>
        </div>
        const responsibilitiesHeader: React.ReactElement = <h3 className='resp-header'>{translations.experience.responsibilities}</h3>
        const respArr: React.ReactElement[] = [];
        responsibilities.map((resp, ind) => respArr.push(<li key={"li resp" + ind} className='resp-name'>{translations.experience[resp as keyof workType]}</li>));
        return <div key={index + 'work'} className='experience container'>
            {leftContainer}
            <div className='right work-container'>{responsibilitiesHeader}<ul className='resp-ul'>{respArr}</ul></div>
        </div>
    }

    return (
        <section id='experience' className='experience section content'>
            <div className='experience header'>
                <Icon className='header-icon' icon='suitcase' style={{ "fill": mode === 0 ? "#64389b" : "#f6f7ed" }} size="4vw"></Icon>
                <h2>{translations.navbar.experience}</h2>
            </div>
            {workList.map((work, index) => renderWorkContainers(work.time, work.header, work.responsibilities, index))}
        </section>
    );
};

export default Experience;