import Swal, {SweetAlertOptions} from 'sweetalert2';
import './patch.css';

export class SweetAlert2Mod {
    fire: typeof Swal.fire = Swal.fire.bind(Swal);

    fireWithOptions(options: SweetAlertOptions) {
        return Swal.fire(options);
    }

    Swal: typeof Swal = Swal;
}
