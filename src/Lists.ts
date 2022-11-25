type monthType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const Lists: {
    links: string[],
    skills: { [key: string]: [1 | 2 | 3 | 4 | 5, 0 | 1] },
    langs: { [key: string]: 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2' | 'native' },
    qualities: string[],
    experience: {
        time: [[monthType, number], [monthType, number]],
        header: string,
        responsibilities: string[]
    }[]
} = {

    links: [
        'about',
        'skills',
        'qualities',
        'experience',
        'contacts'],
    skills: {
        JavaScript: [5, 0],
        HTML: [5, 0],
        CSS: [5, 0],
        React: [5, 0],
        TypeScript: [5, 0],
        Git: [5, 0],
        adaptive: [5, 1],
        algorithms: [4, 1],
        dataStruct: [4, 1],
        JSON: [4, 0],
        Python: [4, 0],
        Java: [3, 0]
    },
    langs: {
        rus: 'native',
        eng: 'b2'
    },
    qualities: [
        "attention",
        "anMind",
        "outOfBox",
        "quickWitted",
        "activity",
        "persistence",
        "perseverance",
        "responsibility",
        "stressTolerance",
        "commSkills",
        "teamPlayer"],
    experience: [{
        time: [[8, 2021], [11, 2021]],
        header: "first",
        responsibilities: [
            "layout",
            "logic",
            "react",
            "adaptive",
            "pdf",
            "lang"
        ]
    },
    {
        time: [[4, 2022], [7, 2022]],
        header: "first",
        responsibilities: [
            "mail",
            "debug",
            "layout",
            "logic",
            "react",
            "adaptive",
            "lang"
        ]
    }]


};

export default Lists;