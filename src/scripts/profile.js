export default function Data() {

    const data = JSON.parse(localStorage.getItem('userProfile'));
    const indexPage = 'home';

    if (data) {
        // ЛК
        if (document.querySelector(".profile")) {
            document.querySelector('.name').textContent = data.name;
            document.querySelector('.email').textContent = data.email;
            document.querySelector('.phone').textContent = data.phone;
            document.querySelector('.profile-avatar img').src = data.avatar;
        }

        // sidebar
        if (document.querySelector(".sidebar")) {
            document.querySelector('.user-name').textContent = data.name;
            document.querySelector('.user-phone').textContent = data.phone;
            document.querySelector('.user-image img').src = data.avatar;
        }
        // visual ЛК
        const element = document.querySelector('.profile');
        if (element !== null) { 
            element.style.display = 'flex';
        }
    } else {
        window.location.href = `${indexPage}.html`;
    }
}
