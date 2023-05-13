import {personal, reticula} from './getData.js'

const ms1 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 1);
const ms3 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 3);
const ms5 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 5);
const ms7 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 7);
const ms9 = reticula.filter( materia => materia.grupoMatutino && materia.semestre === 9);

// const container = document.getElementById('app')
// container.innerHTML = `<pre>${JSON.stringify(ms1, null, 2)}</pre>`

// console.table(ms1)
// console.table(ms3)
// console.table(ms5)
// console.table(ms7)
// console.table(ms9)


// const aed1285 = ms1.find( clave => clave.clave == 'aed-1285'	)
// const aeb1055	 = ms1.find( clave => clave.clave == 'aeb-1055' )



// -----------------------------
class Docente {

  constructor( docente ) {
    this.profesor = docente.profesor;
    this.materias = docente.materias;
  }

  getTalleres() {
    return console.log('No impartiendo talleres por el momento')
  }
}


class DocentesDesarrollo extends Docente {

  constructor( docente ) {
    super( docente )
    this.area = 'impartiendo talleres en el Area de desarrollo';
  }

  getTalleres() {
    return console.log(this.area)
  }

}


// -----------------------------

const asignarMaterias = ( claveMaestro, asignaturas ) => {
  const profesor =  personal.find( nombre => nombre.clave == claveMaestro)

  const materias = asignaturas.map( asignatura => {
    return reticula.find( mat => mat.clave == asignatura )
  })

  return {
    profesor,
    materias: [...materias]
  }
}


// const ivan = asignarMaterias('000', ['scd-1023', 'scd-1022', 'scc-1010'])

// console.log(ivan)


// const verificarHorasGrupo = ( {profesor, materias} ) => {
//   const total = materias.map( materia => materia.horasTeoricas + materia.horasPracticas ).reduce( (acc, el) => acc + el)
//    if( total < profesor.horasMinimas ) return 'faltan horas, se llevan hasta el momento: ' + total + ' horas'
//    if ( total > profesor.horasMaximas ) return 'esta pasado, se llevan hasta el momento: ' + total + ' horas'
//    return 'esta en el rango, se llevan hasta el momento: ' + total + ' horas'
// }

// console.log(verificarHorasGrupo( ivan ))




const manuel = new DocentesDesarrollo( ( asignarMaterias('398', ['aed-1285', 'aeb-1055'] )) )
manuel.getTalleres()

const ivan  = new Docente( asignarMaterias('000', []))
// ivan.getTalleres()