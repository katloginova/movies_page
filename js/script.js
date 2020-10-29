
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          btnConfirm = document.querySelector('button'),
          inputAdd = document.querySelector('.adding__input'),
          inputCheck = document.querySelectorAll('input');
    
    
    
    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = "Драма";
    
    poster.style.backgroundImage = "url('img/bg.jpg')";
    
    movieList.innerHTML = '';
    
    movieDB.movies.sort();
    
    let iLast;
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>
        `;
        iLast = i + 1;
    });
    
    
    
    btnConfirm.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputAdd.value != '') {
            let filmNew = inputAdd.value;
                if (filmNew.length >21) {
                    filmNew = filmNew.slice(0, 21) + '...';
                }
                movieDB.movies.push(filmNew);
                movieList.innerHTML += `
                    <li class="promo__interactive-item">${iLast + 1} ${filmNew}
                    <div class="delete"></div>
                    </li>
                `;
                iLast++;
                inputAdd.value = '';
        } else {
            alert('Введите фильм!');
        }
        
    });
    
    
    inputCheck[2].addEventListener('click', () => {
        if (inputCheck[2].checked == true) {
            console.log('Добавляем любимый фильм');
        }
    });
    
});
