const header = {
  homepage: 'https://collazomanuel.github.io/website',
  title: 'MC.',
}

const about = {
  name: 'Manuel Collazo',
  role: 'Programmer',
  description: '',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  {
    name: 'Project 1',
    description:
      'An online multiplayer RTS game made in C++17 with no engine',
    stack: ['C++', 'SDL2'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'A WebGL 3D engine made in Vanilla JS',
    stack: ['JavaScript', 'WebGL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'A system to automate the regulation of temperature and moisture of a culture chamber for mushrooms',
    stack: ['C++', 'Microcontroller'],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.researchgate.net/publication/356904406_Construction_de_una_camara_de_cultivo_altamente_especializada_y_de_bajo_costo_para_uso_de_laboratorio',
  },
]

const skills = [
  'C/C++',
  'Java',
  'Smalltalk',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Git',
  'CI/CD'
]

const contact = {
  email: 'collazo.manuel@outlook.com',
}

export { header, about, projects, skills, contact }
