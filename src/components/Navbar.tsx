import React, { useState } from 'react';
import Icon from './Icon';
import './Navbar.css';
import Select from './Select';


interface INavbar {
    links: string[],
    names: string[],
    lang: number,
    setLang: Function,
    mode: 0 | 1,
    setMode: Function
}

const Navbar: React.FC<INavbar> = ({ links, names, lang, setLang, mode, setMode }) => {

    const [sectionsScroll, setSectionsScroll] = useState<boolean[]>([true, false, false, false, false]);

    window.addEventListener('scroll', () => trackScroll(links, setSectionsScroll, 0))

    function renderNbCol(link: string, name: string, num: number) {
        return <a key={String(num) + 'nb-col'} className={'nb-col' + (sectionsScroll[num] ? ' focused' : '')} href={'#' + link} onClick={(e) => { scrollToSection(e, link) }}>{name}</a>
    }

    function onLangChange(event: React.MouseEvent) {
        const chosen: number = Number((event.target as HTMLElement).id);
        setLang(chosen);
        localStorage.setItem("lang", String(chosen));
        localStorage.setItem("chosen", String(chosen))
    }

    function scrollToSection(event: React.MouseEvent | React.TouchEvent, link: string) {
        if (event.type !== "touchstart") {
            event.preventDefault();
        }
        const scrollTarget: HTMLElement | null = document.getElementById(link);
        const nb: HTMLElement | null = document.querySelector('.nav');
        const navButtons: HTMLElement | null = document.querySelector('.nav-buttons');
        const offsetNb: number = (nb && nb?.offsetHeight !== 0) ? (nb instanceof HTMLElement ? nb?.offsetHeight : 0) : navButtons instanceof HTMLElement ? navButtons?.offsetHeight : 0;
        const elementPosition: number = scrollTarget ? scrollTarget.getBoundingClientRect().top : 0;
        const offsetPosition: number = (elementPosition) ? elementPosition - offsetNb : 0;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    function scrollMobile(event: React.TouchEvent) {
        scrollToSection(event, links[Number((event.target as HTMLElement).id)])
    }

    function setNewMode(mode: 0 | 1) {
        setMode(mode);
        localStorage.setItem("mode", String(mode))
    }

    function renderButtons() {
        return <div className='buttons'>
            <Select className="lang-select" options={lang === 0 ? ['ENG', 'RUS'] : ['АНГЛ', 'РУС']}
                icon={{ name: "world", size: "2vw", style: { "marginRight": "0.3vw" } }}
                openerClass="lang-button"
                optionClass={" lang-option"}
                label={lang === 0 ? "ENG" : "РУС"}
                action={onLangChange}
                scroll={null}></Select>
            <Icon className='mode ml'
            icon={mode === 0 ? 'sun' : 'moon'} size="3vw" style={{ "fill": "" }}
                onClick={() => mode === 0 ? setNewMode(1) : setNewMode(0)}></Icon>
        </div>
    }

    function trackScroll(sectionsIds: string[], setFunction: Function, device: number) {
        const windowScroll: number = window.scrollY;
        const sections: (HTMLElement | null)[] = sectionsIds.map(sectionId => document.getElementById(sectionId));
        const sectionsTop: number[] = sections.map(section => section ? section.offsetTop : 0);
        const sectionsHeight: number[] = sections.map(section => section ? section.offsetHeight : 0);
        const sectionsBottom: number[] = sectionsTop.map((sectionTop, ind) => sectionTop + sectionsHeight[ind]);
        const sectionsScrollCopy: boolean[] | null = device === 0 ? Object.assign([], sectionsScroll) : null;
        for (let i = 0; i < sectionsIds.length; i++) {
            const percent: number = 0.35;
            if (i < sectionsIds.length - 1) {
                if (windowScroll > sectionsTop[i] - (sectionsHeight[i] * percent) && windowScroll < sectionsBottom[i] - (sectionsHeight[i] * percent)) {
                    sectionsScrollCopy ? sectionsScrollCopy[i] = true : setFunction(i);
                }
                else {
                    if (sectionsScrollCopy) { sectionsScrollCopy[i] = false };
                }
            }
            else {
                if (windowScroll + document.documentElement.clientHeight - sectionsHeight[i] * 0.35 > sectionsTop[i]) {
                    sectionsScrollCopy ? sectionsScrollCopy[i] = true : setFunction(i);
                }
                else {
                    if (sectionsScrollCopy) { sectionsScrollCopy[i] = false };
                }

            }
        }
        if (sectionsScrollCopy) { setFunction(sectionsScrollCopy) }
    }

    return (
        <header>
            <div className='nb nav desktop-only'>
                {links.map((el, ind) => renderNbCol(links[ind], names[ind], ind))}
                {renderButtons()}
            </div>
            <div className='nav-buttons nav mobile-only'>
                {renderButtons()}
                <Select className="menu-select" options={names}
                    icon={{ name: "menu", size: "3vw", style: { "marginRight": "1vw" } }}
                    openerClass="ml side-menu"
                    optionClass={" section-option"}
                    label={null}
                    action={scrollMobile}
                    scroll={trackScroll}></Select>
            </div>
        </header>
    );
};

export default Navbar;