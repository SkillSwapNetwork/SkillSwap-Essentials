const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

// const allLoadings = document.querySelectorAll('.loading');
const toggler = document.getElementById('theme-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark');

    // Save the theme preference to localstorage
    const isDarkModeEnabled = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDarkModeEnabled);
}

toggler.addEventListener('change', toggleDarkMode);

window.addEventListener('load', () => {
    // Retrieve the theme preference from localstorage
    const isDarkModeEnabled = localStorage.getItem('darkmode');

    // Set the theme based on the saved preference
    if (isDarkModeEnabled === 'true') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});