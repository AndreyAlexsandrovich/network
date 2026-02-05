export default function Data() {

    const data = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const indexPage = 'home';

    if (data) {
        // ЛК
        if (document.querySelector(".profile")) {
            const name = document.querySelector('.name') as HTMLElement;
            name.textContent = data.name;
            const email = document.querySelector('.email') as HTMLElement;
            email.textContent = data.email;
            const phone = document.querySelector('.phone') as HTMLElement;
            phone.textContent = data.phone;
            const img = document.querySelector('.profile-avatar img') as HTMLImageElement;
            img.src = data.avatar
        }

        // sidebar
        if (document.querySelector(".sidebar")) {
            const userName = document.querySelector('.user-name') as HTMLElement;
            userName.textContent = data.name;
            const userPhone = document.querySelector('.user-phone') as HTMLElement;
            userPhone.textContent = data.phone;
            const userImage = document.querySelector('.user-image img') as HTMLImageElement;
            userImage.src = data.avatar;
        }
        // visual ЛК
        const element = document.querySelector('.profile');
        if (element !== null) {
            (element as HTMLElement).style.display = 'flex';
        }
    } else {
        window.location.href = `${indexPage}.html`;
    }
}
