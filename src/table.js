
const container = document.getElementById('app')

export const setTemplate = ( materias ) => {
  const templateTable = document.getElementById('template-table').content
  const fragment = document.createDocumentFragment()


  const templateTbody = templateTable.getElementById('template-tbody').content
  const fragmentTbody = document.createDocumentFragment()


  materias.forEach( materia => {
    templateTbody.getElementById('asignatura').textContent = materia.asignatura
    templateTbody.getElementById('clave').textContent = materia.clave
    templateTbody.getElementById('créditos').textContent = `${materia.horasTeoricas}-${materia.horasPracticas}-${materia.horasTeoricas+materia.horasPracticas}`
    templateTbody.getElementById('lunes').textContent = ''
    templateTbody.getElementById('martes').textContent = ''
    templateTbody.getElementById('miercoles').textContent = ''
    templateTbody.getElementById('jueves').textContent = ''
    templateTbody.getElementById('viernes').textContent = ''
    templateTbody.getElementById('docente').textContent = ''

    const clone = templateTbody.cloneNode(true);
    fragmentTbody.appendChild(clone)
  })

  const clone = templateTable.cloneNode(true);
  fragment.appendChild(clone)

  container.appendChild(fragment)

}



