

export default function registerProfile() { 
    const formRegistr = document.querySelector('.registry');
    
    
    let profilePage = 'home';
    
    formRegistr?.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputName = formRegistr.querySelector('.name-input') as HTMLInputElement;
        const inputEmail = formRegistr.querySelector('.email-input') as HTMLInputElement;
        const inputPhone = formRegistr.querySelector('.phone-input') as HTMLInputElement;
        const inputPassword = formRegistr.querySelector('.password-input') as HTMLInputElement;
        const inputImage = formRegistr.querySelector('.image-input') as HTMLInputElement;

        const userData = {
            name: inputName,
            email: inputEmail,
            phone: inputPhone,
            avatar: inputImage,
            password: inputPassword
        };
    
        
        localStorage.setItem('dataUsers', JSON.stringify(userData));
        window.location.href = `${profilePage}.html`;
    });


}


    

