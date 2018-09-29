import { RouterModule, Routes } from '@angular/router';

import { ControlComponent } from './components/control/control.component';
import { DisplayComponent } from './components/display/display.component';

const APP_ROUTES: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'display', component: DisplayComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'display' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

//Si necesitas usar el sistema de rutas con hashes, se puede usar lo siguiente
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
