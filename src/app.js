import './styles.css'
import {personal, reticula} from './getData.js'
import { createGrupos } from './createGrupos';
// import  {setTemplate} from './table'


document.addEventListener('DOMContentLoaded', createGrupos([1,3,5,7,9], true))
