const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modalClose=true'
});

if (!document.cookie.includes('modalClose')) {
	modal.classList.add('modal_active');
} else {
	modal.classList.remove('modal_active')
}