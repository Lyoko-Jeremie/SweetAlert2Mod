import Swal from 'sweetalert2';

export class SweetAlert2Mod {
    fire = Swal.fire.bind(Swal);
    Swal = Swal;
}
