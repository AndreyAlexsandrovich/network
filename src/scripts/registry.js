

export default function registerProfile() { 
    const formRegistr = document.querySelector('.registry');
    
    
    let profilePage = 'home';
    
    formRegistr.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputName = formRegistr.querySelector('.name-input').value;
        const inputEmail = formRegistr.querySelector('.email-input').value;
        const inputPhone = formRegistr.querySelector('.phone-input').value;
        const inputPassword = formRegistr.querySelector('.password-input').value;
        const inputImage = formRegistr.querySelector('.image-input').value;
    
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


    

