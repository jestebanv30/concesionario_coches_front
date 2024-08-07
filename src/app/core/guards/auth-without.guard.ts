import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../service/token.service";
import Swal from "sweetalert2";


export const authWithoutGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);


  if(!tokenService.getToken()) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tienes permisos para acceder a esta página'
    });
    router.navigateByUrl('autenticacion/inicio-sesion');
    return false;
  }
  return true;
};
