import React, { useState } from 'react';
import './App.css';
import Experience from './components/sections/Experience';
import MainInfo from './components/sections/MainInfo';
import Navbar from './components/Navbar';
import Qualities from './components/sections/Qualities';
import Skills from './components/sections/Skills';
import translationsEng from './translations/eng.json'
import translationsRu from './translations/ru.json'
import Lists from './Lists';
import Footer from './components/Footer';

const App: React.FC = () => {
  const  [lang, setLang] = useState<number>(localStorage.getItem("lang") ? Number(localStorage.getItem("lang")) : 0)
  const [mode, setMode] = useState<0|1>(localStorage.getItem("mode") ? Number(localStorage.getItem("mode")) as 0|1 : 0)
  const translations = lang === 0 ? translationsEng : translationsRu;
  type navType = typeof translations.navbar;

  return (
    <div className={mode === 0 ? 'day-mode main-container': 'night-mode main-container'}>
      <Navbar links={Lists.links}
      mode={mode}
      setMode={setMode}
      names={Lists.links.map((link) => translations.navbar[link as keyof navType])}
      lang={lang}
      setLang={setLang}
      ></Navbar>
      <MainInfo
      translations={translations}></MainInfo>
      <Skills
      translations={translations}
      mode={mode}></Skills>
      <Qualities
      translations={translations}></Qualities>
      <Experience
       translations={translations}
       mode={mode}></Experience>
      {/* <Education
       translations={translations}></Education> */}
      <Footer
      translations={translations}></Footer>
   </div>
  );
}

export default App;
