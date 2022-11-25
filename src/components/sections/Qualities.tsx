import React, { useRef } from 'react';
import Lists from '../../Lists';
import translationsEng from '../../translations/eng.json'
import translationsRu from '../../translations/ru.json'
import Icon from '../Icon';
import './Qualities.css'

interface IQualities {
    translations: typeof translationsEng | typeof translationsRu
}

const Qualities: React.FC<IQualities> = ({ translations }) => {

    const qualities = useRef<HTMLUListElement>(null);

    const qualitiesSection = useRef<HTMLElement>(null);

    type qualitiesType = typeof translations.qualities;

    function renderQualities() {
        const qualitiesArr: React.ReactElement[] = [];
        Lists.qualities.map((quality, ind) => qualitiesArr.push(<li key={"quality" + ind}><h3 className='quality-name'>{translations.qualities[quality as keyof qualitiesType]}</h3></li>))
        return <div className='qualities-container'>
            <ul className='qualities-ul' ref={qualities}>
                {qualitiesArr}
            </ul>
            <div className='bordered-back-layer'></div>
        </div>
    }

    return (
        <section ref={qualitiesSection} id='qualities' className='qualities section'>
            <div className='overlay'></div>
            <div className='qualities content'>
                <div className='qualities header'>
                    <Icon icon='brain' className='icon-brain header-icon ' style={{ "fill": "#64389b"  }} size="7vw"></Icon>
                    <h2>{translations.navbar.qualities}</h2>
                </div>
                {renderQualities()}
            </div>
        </section>
    );
};

export default Qualities;