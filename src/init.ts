import {SweetAlert2Mod} from "./SweetAlert2Mod";

window.modSweetAlert2Mod = new SweetAlert2Mod();

// example :
// (async () => {
//     const {value: password} = await window.modSweetAlert2Mod.fire({
//         title: 'Enter your password',
//         input: 'password',
//         inputLabel: 'Password',
//         inputPlaceholder: 'Enter your password',
//         inputAttributes: {
//             maxlength: 1000,
//             autocapitalize: 'off',
//             autocorrect: 'off'
//         }
//     })
//
//     if (password) {
//         await window.modSweetAlert2Mod.fire(`Entered password: ${password}`)
//     }
// })().catch(E => {
//     console.error(E);
// });
