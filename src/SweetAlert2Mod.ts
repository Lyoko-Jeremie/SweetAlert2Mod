import Swal, {SweetAlertOptions} from 'sweetalert2';
import './patch.css';

import '@sweetalert2/themes/dark/dark.css';

export class SweetAlert2Mod {
    fire: typeof Swal.fire = Swal.fire.bind(Swal);

    fireWithOptions(options: SweetAlertOptions) {
        return Swal.fire(options);
    }

    Swal: typeof Swal = Swal;
}
