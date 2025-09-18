export default function openModel(popup, openButton, closeButton) { 
    openButton.addEventListener("click", () => {
          popup.style.visibility = 'visible';
        });
        
        closeButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            popup.style.visibility = 'hidden';
        })
    
    
        popup.addEventListener('click', (evt) => { 
            if (evt.target === popup) { 
                popup.style.visibility = 'hidden';
            }
        })
        
        document.addEventListener('keydown', (evt) => { 
             if (evt.key === 'Escape') { 
                popup.style.visibility = 'hidden';
            }
        })
}