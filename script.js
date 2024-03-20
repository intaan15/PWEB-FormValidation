document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('main');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validateField(name, name.value.trim() !== '', 'Nama tidak boleh kosong');
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Email tidak benar');
    });

    phone.addEventListener('input', () => {
        validateField(phone, isPhone(phone.value.trim()), 'Minimal 10 angka');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Minimal 8 karakter');
    });


    function checkInputs() {
        let isValid = true;
        validateField(name, name.value.trim() !== '', 'Nama tidak boleh kosong');
        validateField(email, isEmail(email.value.trim()), 'Email tidak benar');
        validateField(phone, isPhone(phone.value.trim()), 'Minimal 10 angka');
        validateField(password, password.value.trim().length >= 8, 'Minimal 8 karakter');

        document.querySelectorAll('.forminput').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'forminput error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'forminput success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?(\d.*){10,}$/.test(phone);
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

});