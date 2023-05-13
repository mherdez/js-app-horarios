import {personal, reticula} from './getData.js'
import  {setTemplate} from './table'

export const createGrupos = ( semestres, turnoMatutino = true) => {


  // semestres.map(num => setTemplate( reticula.filter( materia => materia.grupoMatutino && materia.semestre === num)))



}



// setTemplate(reticula.filter( materia => materia.grupoMatutino && materia.semestre === 1))
// setTemplate(reticula.filter( materia => materia.grupoMatutino && materia.semestre === 3))
setTemplate(reticula.filter( materia => materia.grupoMatutino && materia.semestre === 5))
setTemplate(reticula.filter( materia => materia.grupoMatutino && materia.semestre === 7))
setTemplate(reticula.filter( materia => materia.grupoMatutino && materia.semestre === 9))


// const ms1 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 1);
// const ms3 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 3);
// const ms5 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 5);
// const ms7 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 7);
// const ms9 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 9);

// console.table(ms1)
// console.table(ms3)
// console.table(ms5)
// console.table(ms7)
// console.table(ms9)