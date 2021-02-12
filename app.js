const hamburger = document.querySelector('.header .hamburger');
const mobile_menu = document.querySelector('.header .nav-content')
const menu_item = document.querySelectorAll('.header .nav-content ul a');

const topbar = document.querySelector('.top-bar');
const myTitle = document.querySelector('.header .title');
const headerlogo = document.querySelector('.header .Logo');
const navcontent = document.querySelector('.header .nav-content')
const header = document.querySelector('.header');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    navcontent.style.display = 'flex';

    headerlogo.style.display = 'flex';
    
    myTitle.style.display = 'flex';
    /*topbar.style.display = 'flex';*/
    hamburger.style.display = 'none';
    header.style.backgroundColor = 'darkgreen';


})

menu_item.forEach((item) => {

    item.addEventListener('click', () => {

    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

    headerlogo.style.display = 'none';
    navcontent.style.display = 'none';
    myTitle.style.display = 'none';
    topbar.style.display = 'none';
    hamburger.style.display = 'flex';
    header.style.backgroundColor = 'transparent';
    hamburger.style.right = '0';

    });

    
   
  
})

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 100){
        headerlogo.style.display = 'none';
        navcontent.style.display = 'none';
        myTitle.style.display = 'none';
        topbar.style.display = 'none';
       
        header.style.backgroundColor = 'transparent';
        hamburger.style.display = 'flex';
        hamburger.style.right = '0';
    }else{
        headerlogo.style.display = 'flex';
        navcontent.style.display = 'flex';
        myTitle.style.display = 'flex';
        topbar.style.display = 'flex';
        hamburger.style.display = 'none';
        header.style.backgroundColor = 'darkgreen';
        hamburger.style.right = '0';
    
    }
});