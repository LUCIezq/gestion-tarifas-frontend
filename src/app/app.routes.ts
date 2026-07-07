import { Routes } from '@angular/router';
import { Clientes } from './clientes/clientes';
import { Productos } from './productos/productos';
import { Costos } from './costos/costos';
import { Tarifas } from './tarifas/tarifas';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/clientes'
    },
    {
        path: 'clientes',
        component: Clientes
    },
    {
        path: 'productos',
        component: Productos
    },
    {
        path: 'costos',
        component: Costos
    },
    {
        path: 'tarifas',
        component: Tarifas
    }
];
