import React from 'react';
import './MainInfo.css'
import translationsEng from '../../translations/eng.json'
import translationsRu from '../../translations/ru.json'
import Icon from '../Icon';

interface IMainInfo {
    translations: typeof translationsEng | typeof translationsRu
}

const MainInfo: React.FC<IMainInfo> = ({ translations }) => {
    return (
        <section id='about' className='about section'>
            <h2><Icon icon='square' className='header-icon' style={{ "fill": "blueviolet" }} size="2.9vw"></Icon>{translations.navbar.about}</h2>
            <div className="about content">
                <img className='desktop-only' alt='working-woman' src='./working_woman.png'></img>
                <div className='main-text'>
                    <div className='text-container'>
                        <h3>{translations.main.hi}</h3>
                        <p>{translations.main.myName}</p>
                        <ul className='about-facts'>
                            <li>{translations.main.age}</li>
                            <li>{translations.main.place}</li>
                            <li>{translations.main.graduated}</li>
                        </ul>
                        <p className='conv'>{translations.main.convinced}</p>
                        <p>{translations.main.here}<b className='why'>{translations.main.why}</b>:</p>
                    </div>
                    <div className='bordered-back-layer'></div>
                </div>
            </div>
        </section>
    );
};

export default MainInfo;