
    // Функция для переключения полей ввода/вставки
    function showInput(type) {
        const inputField = document.getElementById('inputField');
        if (type === 'address') {
            inputField.placeholder = 'Введите адрес';
            inputField.value = '';
        } else if (type === 'link') {
            inputField.placeholder = 'Вставьте ссылку';
            inputField.value = '';
        }
    }

    //Изменение цвета кнопок
    const addressButton = document.querySelector('.adress');
    const linkButton = document.querySelector('.links');
    function classButtons() {
        if (addressButton.classList.contains('active')) {
            addressButton.classList.remove('active');
            addressButton.classList.add('inactive');
            linkButton.classList.remove('inactive');
            linkButton.classList.add('active');
        } else {
            addressButton.classList.remove('inactive');
            addressButton.classList.add('active');
            linkButton.classList.remove('active');
            linkButton.classList.add('inactive');
        }
    }
    addressButton.addEventListener('click', classButtons);
    linkButton.addEventListener('click', classButtons);

    //Удаление и появление блоков при нажатии на кнопки
        const boxes = document.querySelectorAll('.box-meters');

        addressButton.addEventListener('click', function() {
            boxes.forEach(box => {
                box.style.display = 'block'; // Показываем блоки
            });
            addressButton.classList.add('active');
            addressButton.classList.remove('inactive');
        });

        linkButton.addEventListener('click', function() {
            boxes.forEach(box => {
                box.style.display = 'none';
            });
        });