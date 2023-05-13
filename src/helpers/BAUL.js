

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
const verificarHorasGrupo = ( {profesor, materias} ) => {
  const total = materias.map( materia => materia.horasTeoricas + materia.horasPracticas ).reduce( (acc, el) => acc + el)
   if( total < profesor.horasMinimas ) return 'faltan horas, se llevan hasta el momento: ' + total + ' horas'
   if ( total > profesor.horasMaximas ) return 'esta pasado, se llevan hasta el momento: ' + total + ' horas'
   return 'esta en el rango, se llevan hasta el momento: ' + total + ' horas'
}

// const ivan = asignarMaterias('000', ['scd-1023', 'scd-1022', 'scc-1010'])



// console.log(ivan)



// console.log(verificarHorasGrupo( ivan ))




// const manuel = new DocentesDesarrollo( ( asignarMaterias('398', ['aed-1285', 'aeb-1055'] )) )
// manuel.getTalleres()

// const ivan  = new Docente( asignarMaterias('000', []))
// ivan.getTalleres()

const manuel398 = asignarMaterias('398', [])
