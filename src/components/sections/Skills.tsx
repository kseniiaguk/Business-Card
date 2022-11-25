import React from 'react';
import './Skills.css'
import translationsEng from '../../translations/eng.json'
import translationsRu from '../../translations/ru.json'
import Icon from '../Icon';
import Lists from '../../Lists';


interface ISkills {
    translations: typeof translationsEng | typeof translationsRu,
    mode: 0 | 1
}

const Skills: React.FC<ISkills> = ({ translations, mode }) => {

    type skillsType = typeof translations.skills;

    function renderSkill(name: string, num: number, center: number, level: number) {
        const levelScale: React.ReactElement[] = [];
        for (let i = 0; i < 5; i++) {
            levelScale.push(<Icon key={i + "level-icon"} icon={(i < level) ? 'circle-filled' : "circle-empty"} className="skill-circle" style={{ "fill": mode === 0 ? "#20252e" : "#f6f7ed", "marginRight": "0.2vw" }} ></Icon>)
        }
        return <li key={'skill ' + name} className={'skill-row' + (num < center ? ' left' : '')}>
            <h3 className='skill name'>{name}</h3>
            <div>{levelScale}</div>
        </li>
    }

    function renderLang(name: string, level: string) {
        return <li key={'lang ' + name} className='lang-row'>
            <p className='lang name'>{translations.skills[name as keyof skillsType]}</p>
            <p className='lang-level'>{translations.skills[level as keyof skillsType]}</p>
        </li>
    }

    const skills: { [key: string]: [1 | 2 | 3 | 4 | 5, 0 | 1] } = Lists.skills;
    const langs: { [key: string]: 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2' | 'native' } = Lists.langs;

    function skillsIteration(skillKey: string, num: number) {
        return renderSkill(skills[skillKey][1] === 0 ? skillKey : translations.skills[skillKey as keyof skillsType], num, 6, skills[skillKey][0])
    }

    return (

        <section id='skills' className='skills section'>
            <div className='skills container'>
                <h2><Icon icon='tools' className='header-icon' style={{ "fill": mode === 0 ? "#64389b" : "#f6f7ed" }} size="4vw"></Icon>{translations.navbar.skills}</h2>
                <div className='skills content'>
                    <div className='skills-area'>
                        <ul className='skills-ul'>{Object.keys(skills).map((skill, index) => skillsIteration(skill, index))}</ul>
                        <div className='background-layer'></div>
                    </div>
                    <div className='lang-area'>
                        <h3>{translations.skills.langs}</h3>
                        <ul className='langs-ul'>
                            {Object.keys(langs).map((langKey) => renderLang(langKey, langs[langKey]))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;