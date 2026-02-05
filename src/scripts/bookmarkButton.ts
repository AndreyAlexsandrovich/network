  export default function bookmarkButton(cloneTemplate: DocumentFragment) {
    const bookmarkButton = cloneTemplate.querySelector('#bookmark__button') as HTMLElement;
    if (!bookmarkButton) return;
    const iconStar = cloneTemplate.querySelector('.star-icons') as HTMLElement;
    if (!iconStar) return;
    const circle = document.querySelector('.circle-input') as HTMLElement;
    if (!circle) return;
    let number = circle?.querySelector('p') as HTMLElement;
    if (!number) return;
    let count = parseInt((number as HTMLElement).textContent || '0') || 0;
    circle.style.display = 'none';
    bookmarkButton.addEventListener('click', () => {
        const existingNotification = bookmarkButton.querySelector('.add-bookmark') as HTMLElement;
        if (existingNotification) {
            return;
        }
     

        if (count <= 0 || count >= 0) {
            (iconStar as HTMLElement).style.display = 'none';
            const createElement = document.createElement('h4');
            createElement.className = 'add-bookmark';
            createElement.textContent = 'В избранном';
            bookmarkButton.appendChild(createElement);
            //count
           circle.style.display = 'block';
            count += 1;
            number.textContent = `${count}`;
            // time
            setTimeout(() => {
                iconStar.style.display = 'flex';
                createElement.remove();
            }, 3000)
        }
    })
    return;
}
