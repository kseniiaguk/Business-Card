import React from 'react';
import './Footer.css'
import Icon from './Icon';
import translationsEng from '../translations/eng.json'
import translationsRu from '../translations/ru.json'

interface IFooter {
    translations: typeof translationsEng | typeof translationsRu,
}

const Footer: React.FC<IFooter> = ({translations}) => {
    return (
        <div id='contacts' className='footer'>
            <div className='contacts'>
                <p><Icon icon='mail' size="2vw" style={{"marginRight": "1.5vw"}}></Icon>kseniiaguk15@yandex.ru</p>
                <a href='https://vk.com/evisco' rel="noreferrer" target="_blank"><Icon icon='vk' size='4vw' style={{"marginRight": "2vw"}}></Icon></a>
                <a href='https://t.me/evisco10' rel="noreferrer" target="_blank"><Icon icon='telegram' size='4vw' style={{"marginRight": "2vw"}}></Icon></a>
                <a href='https://github.com/kseniiaguk' rel="noreferrer" target="_blank"><Icon icon='github' size='4vw'></Icon></a>
            </div>
            <div className='copyright'>
                <p>{translations.common.copyright}</p>
                <a href="https://ru.freepik.com/free-photo/_5495105.htm#query=%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D0%B8%D0%B2&position=0&from_view=search&track=sph">Изображение от senivpetro на Freepik</a>
                <a href="https://ru.freepik.com/free-vector/_11879394.htm#query=working%20woman&position=0&from_view=search&track=sph">Изображение от jcomp на Freepik</a>
            </div>
        </div>
    );
};

export default Footer;
