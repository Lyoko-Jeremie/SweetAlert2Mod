# SweetAlert2Mod

---

this is a simple wrap to [sweetalert2](https://sweetalert2.github.io) .

the `window.modSweetAlert2Mod.fire()` === `Swal.fire()` , the `window.modSweetAlert2Mod.Swal` === `Swal`

## how to use

example :

```js
window.modSweetAlert2Mod.fire(
    // do anything the ``Swal.fire()`` can do
    {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }
);
```



example : (same as [the official example "input-types password" ](https://sweetalert2.github.io/#input-types))

```ts
(async () => {
    const {value: password} = await window.modSweetAlert2Mod.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 1000,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    })

    if (password) {
        await window.modSweetAlert2Mod.fire(`Entered password: ${password}`)
    }
})().catch(E => {
    console.error(E);
});
```
