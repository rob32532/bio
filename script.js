function handleHashChange() {
    let currentHash = window.location.hash;

    if (currentHash === "") {
        currentHash = "#main";
    }

    const targetId = currentHash.replace('#', '');

    const allSections = document.querySelectorAll('.section');
    allSections.forEach(function (section) {
        section.classList.remove('active-section');
    });

    const targetSection = document.getElementById(targetId);

    const headerTitle = document.getElementById('header-title');

    switch (targetId) {
        case "main":
            document.title = 'Главная'
            headerTitle.textContent = 'Главная';
            break;
        case "about":
            document.title = 'Обо мне'
            headerTitle.textContent = 'Обо мне';
            break;
        case "photo":
            document.title = 'Фотографии'
            headerTitle.textContent = 'Фотографии';
            break;
        default:
            document.title = 'Главная';
            headerTitle.textContent = 'Главная';
    }

    if (targetSection) {
        targetSection.classList.add('active-section');
    } else {
        document.getElementById('main').classList.add('active-section');
    }
}

window.addEventListener('hashchange', handleHashChange);

handleHashChange();