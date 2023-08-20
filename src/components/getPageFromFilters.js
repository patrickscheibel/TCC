import Pagina1_Dashboard from '../pages/Pagina1/Dashboard.js';
import Pagina1_Login from '../pages/Pagina1/Login.js';

const getPageFromFilters = (filtro1, filtro2, filtro3, filtro4) => {
    if(filtro1 === 'pagina1' && filtro2 === 'pagina2' && filtro3 === 'pagina3' && filtro4 === 'dashboard') {
        return <Pagina1_Dashboard />;
    }
    if(filtro1 === 'pagina1' && filtro2 === 'pagina2' && filtro3 === 'pagina3' && filtro4 === 'login') {
        return <Pagina1_Login />;
    }
};

export default getPageFromFilters;