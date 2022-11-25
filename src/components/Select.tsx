import React, { useState } from 'react';
import Icon from './Icon';
import './Select.css';
import Lists from '../Lists';


interface ISelect {
    className: string | null,
    options: string[],
    icon: { name: string, size: string, style?: { [key: string]: string } } | null,
    label: string | null,
    openerClass: string,
    optionClass: string | undefined,
    action: Function,
    scroll: Function | null
        
    }

const Select: React.FC<ISelect> = ({ className, options, icon, label, openerClass, optionClass, action, scroll }) => {

    const [focused, setFocused] = useState<boolean>(false);

    const links = Lists.links;

    const opener = <button className={openerClass}
        onClick={(event) => {
            openerOnEvent(event);
            setFocused(true);
        }}
    >
        {icon ? <Icon icon={icon.name} size={icon.size} style={icon.style}></Icon> : null}
        {label ? <label>{label}</label> : null}
    </button>

    const [openStatus, setOpenStatus] = useState<boolean>(false);
    const [chosenOptionNum, setChosenOptionNum] = useState<number>((className === 'lang-select' && localStorage.getItem('chosen')) ? Number(localStorage.getItem('chosen')) : 0);


    function openerOnEvent(event: React.FocusEvent | React.MouseEvent) {
        event.type === 'click' ? setOpenStatus(!openStatus) : setTimeout(() => setOpenStatus(false), 400);
    };


    function renderOption(option: string, index: number) {
        return <div key={index + 'option ' + className} id={String(index)}
        className={'option' +
         ((index === chosenOptionNum) ? ' chosen' : '') + (optionClass ? optionClass : '')}
            onMouseDown={function (event) {
                if (document.documentElement.clientWidth > 960) {
                    action(event);
                    setChosenOptionNum(index);
                }
            }}
            onTouchStart={function (event) {
                action(event);
                setChosenOptionNum(index);
            }}
            
        >{option}</div>
    }
    if (scroll) { window.addEventListener('scroll', () => scroll(links, setChosenOptionNum, 1)) }

    return (
        <div className={' select-container '+
        (focused ? ' focused ' : '') + className}
            onBlur={(event) => {
                openerOnEvent(event);
                setFocused(false);
            }}
            onMouseEnter={() => {  if (document.documentElement.clientWidth > 960) {setFocused(true)}}}
            onMouseLeave={() => {  if (document.documentElement.clientWidth > 960) {setFocused(false)}}}
            onTouchStart={() => setFocused(true)}
            onTouchEnd={() => setFocused(false)}
        >
            {opener}
            <div className={' options-container' + (openStatus ? ' show ' : ' hidden ')}>
                {options.map((option, ind) => renderOption(option, ind))}
            </div>
        </div>
    );
};

export default Select;