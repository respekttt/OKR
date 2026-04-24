function useDialog() {
  let budget = 0;

  while (budget <= 0 || isNaN(budget)) {
    budget = prompt("Введіть ваш бюджет (usd):");
    budget = Number(budget);
  }

  if (budget >= 30000 && budget < 50000) {
    alert("Рекомендуємо звернути увагу на свіжу Tesla Model 3 Highland Long Range.");
  } else if (budget >= 15000 && budget < 30000) {
    alert("У цьому бюджеті є чудові варіанти: BMW G20 або Peugeot 508 SW.");
  } else {
    alert("Ми підготуємо для вас індивідуальну пропозицію.");
  }
}

function showDeveloperInfo(lastName, firstName, position = "Frontend Розробник") {
  alert(`Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

function compareCarModels(car1, car2) {
  if (car1.length > car2.length) {
    alert("Більший рядок: " + car1);
  } else if (car2.length > car1.length) {
    alert("Більший рядок: " + car2);
  } else {
    alert("Рядки однакові за довжиною.");
  }
}

function activateEcoMode() {
  const originalBackground = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "#d3d3d3";

  setTimeout(() => {
    document.body.style.backgroundColor = originalBackground;
    alert("Фон повернуто до попереднього кольору.");
  }, 30000);
}

function redirectToCatalog() {
  alert("Переходимо до повного каталогу авто...");
  location.href = "catalog.html";
}

function showCurrentOffers() {
  alert("Поточні акції салону:\n• Знижка до 10% на обрані моделі\n• 0 грн за перше ТО для нових клієнтів\n• Свіжі поставки з США щотижня");
}

function updateEventStatus(message, state = 'info') {
  const statusBox = document.getElementById('event-status');
  if (!statusBox) {
    return;
  }

  statusBox.textContent = message;
  statusBox.className = `event-status event-status--${state}`;
}

function showTestDriveAlert() {
  updateEventStatus('Заявку на тест-драйв успішно прийнято менеджером автосалону.', 'info');
}

function logTestDrive(){
  console.log('Кнопка була натиснута')
}

function requestConsultation() {
  const clientName = prompt('Введіть ваше ім\'я та прізвище:', 'Іван Петренко');
  const phoneNumber = prompt('Введіть номер телефону для консультації:', '+38 (0__) ___-__-__');
  const preferredBrand = prompt('Яка марка авто вас цікавить?', 'BMW');

  if (clientName && phoneNumber && preferredBrand) {
    alert(
      `Заявка на консультацію прийнята:\n` +
      `Клієнт: ${clientName}\n` +
      `Телефон: ${phoneNumber}\n` +
      `Цікавить марка: ${preferredBrand}\n\n` +
      `Менеджер зв'яжеться з вами найближчим часом.`
    );
  }
}

const showroomEventHandler = {
  handleEvent(event) {
    const activeElement = event.currentTarget;
    console.log('Обробник-об\'єкт спрацював на елементі:', activeElement);

    // const elementDescription = `${activeElement.tagName.toLowerCase()}#${activeElement.id}`;
    // updateEventStatus(
    //   `Відділ тест-драйву зафіксував звернення клієнта. Канал прийому: ${elementDescription} (визначено через event.currentTarget).`,
    //   'success'
    // );

    activeElement.classList.add('is-active-handler');
    setTimeout(() => {
      activeElement.classList.remove('is-active-handler');
    }, 400);
  }
};

let isShowroomHandlerActive = false;

function attachShowroomEventHandler(testDriveBtn) {
  if (!testDriveBtn || isShowroomHandlerActive) {
    return;
  }

  testDriveBtn.addEventListener('click', showTestDriveAlert);
  testDriveBtn.addEventListener('click', logTestDrive);
  testDriveBtn.addEventListener('click', showroomEventHandler);
  testDriveBtn.disabled = false;
  isShowroomHandlerActive = true;
  updateEventStatus('Запис на тест-драйв ВІДКРИТО: менеджер фіксує звернення клієнтів.', 'success');
}

function detachShowroomEventHandler(testDriveBtn) {
  if (!testDriveBtn || !isShowroomHandlerActive) {
    return;
  }

  testDriveBtn.removeEventListener('click', showTestDriveAlert);
  testDriveBtn.removeEventListener('click', logTestDrive);
  testDriveBtn.removeEventListener('click', showroomEventHandler);
  testDriveBtn.disabled = true;
  isShowroomHandlerActive = false;
  updateEventStatus('Запис на тест-драйв ЗАКРИТО: обробник заявок вимкнено', 'warning');
}

if (document.body && document.readyState === 'loading') {
  document.write('<div class="write-note" aria-hidden="true">Оновлення вітрини активне</div>');
}

document.addEventListener('DOMContentLoaded', () => {
  console.info('Сторінка завантажена, запускаємо оновлення вітрини.');

  const title = document.getElementById('car-title');
  if (title) {
    title.textContent = "Tesla Model 3 Highland (Оновлено)";
    console.log('Оновлено заголовок головної моделі.');
  }

  const specs = document.querySelectorAll('.spec-item');
  if (specs.length > 0) {
    specs[0].innerHTML = "Диски: <strong>Nova 19-inch</strong>";
    console.log('Оновлено першу характеристику в списку.');
  }

  const priceTag = document.getElementById('price-tag');
  if (priceTag) {
    priceTag.outerHTML = "<h3 class='discount'>Спеціальна ціна: 33 500$!</h3>";
    console.warn('Ціну змінено на акційну.');
  }

  const mainOffer = document.getElementById('main-offer');
  if (mainOffer) {
    const offerDescription = mainOffer.querySelector('p');
    if (offerDescription && offerDescription.firstChild && offerDescription.firstChild.nodeType === Node.TEXT_NODE) {
      const descriptionNodeValue = offerDescription.firstChild.nodeValue;
      const descriptionData = offerDescription.firstChild.data;

      console.log('nodeValue опису:', descriptionNodeValue);
      console.log('data опису:', descriptionData);
      console.info('nodeValue та data однакові:', descriptionNodeValue === descriptionData);
    }
  }
  const catalogMenu = document.getElementById('catalog-menu');
  if (catalogMenu) {
    const menuBehavior = {
      requestConsultation() {
        requestConsultation();
      },
      showOffers() {
        showCurrentOffers();
      },
      goHome() {
        location.href = 'index.html';
      },
      registerTestDrive() {
        updateEventStatus('Клієнт натиснув кнопку запису на тест-драйв у каталозі.', 'info');
      }
    };

    catalogMenu.onclick = (event) => {
      const actionButton = event.target.closest('[data-action]');
      if (!actionButton || !catalogMenu.contains(actionButton)) {
        return;
      }

      const actionName = actionButton.dataset.action;
      const actionMethod = menuBehavior[actionName];
      if (typeof actionMethod === 'function') {
        actionMethod();
      }
    };
  }

  const consultationButton = document.getElementById('consultation-btn');
  if (consultationButton && !catalogMenu) {
    consultationButton.addEventListener('click', requestConsultation);
  }

  const selectionButton = document.getElementById('selection-btn');
  if (selectionButton) {
    selectionButton.addEventListener('click', useDialog);
  }

  const developerButton = document.getElementById('developer-info-btn');
  if (developerButton) {
    developerButton.addEventListener('click', () => showDeveloperInfo('Соляник', 'Денис'));
  }

  const compareButton = document.getElementById('compare-models-btn');
  if (compareButton) {
    compareButton.addEventListener('click', () => {
      const firstModel = prompt('Введіть першу модель авто:', 'Tesla Model 3 Highland');
      const secondModel = prompt('Введіть другу модель авто:', 'BMW 320i');

      if (firstModel && secondModel) {
        compareCarModels(firstModel, secondModel);
      }
    });
  }

  const offersButton = document.getElementById('offers-btn');
  if (offersButton && !catalogMenu) {
    offersButton.addEventListener('click', showCurrentOffers);
  }

  const catalogButton = document.getElementById('catalog-btn');
  if (catalogButton) {
    catalogButton.addEventListener('click', redirectToCatalog);
  }

  const homeButton = document.getElementById('home-btn');
  if (homeButton && !catalogMenu) {
    homeButton.addEventListener('click', () => {
      location.href = 'index.html';
    });
  }

  const inventoryList = document.getElementById('inventory-list');
  if (inventoryList) {
    inventoryList.onclick = (event) => {
      const clickedItem = event.target.closest('.inventory-item');
      if (!clickedItem || !inventoryList.contains(clickedItem)) {
        return;
      }

      const activeItem = inventoryList.querySelector('.inventory-item--active');
      if (activeItem) {
        activeItem.classList.remove('inventory-item--active');
      }

      clickedItem.classList.add('inventory-item--active');
      updateEventStatus(
        `Обрано модель: ${clickedItem.dataset.model}. Менеджер готує деталі комплектації.`,
        'info'
      );
    };
  }

  const arrivalButton = document.getElementById('arrival-btn');
  if (arrivalButton) {
    arrivalButton.addEventListener('click', addNewArrival);
  }

  const backgroundButton = document.getElementById('background-btn');
  if (backgroundButton) {
    backgroundButton.addEventListener('click', activateEcoMode);
  }

  const testDriveBtn = document.getElementById('drive-btn')
  if (testDriveBtn) {
    attachShowroomEventHandler(testDriveBtn)

  }

  const removeHandlerBtn = document.getElementById('remove-handler-btn');
  if (removeHandlerBtn && testDriveBtn) {
    removeHandlerBtn.addEventListener('click', () => {
      detachShowroomEventHandler(testDriveBtn);
      console.log('showroomEventHandler успішно видалено з drive-btn');
    });
  }

  const restoreHandlerBtn = document.getElementById('restore-handler-btn');
  if (restoreHandlerBtn && testDriveBtn) {
    restoreHandlerBtn.addEventListener('click', () => {
      attachShowroomEventHandler(testDriveBtn);
      console.log('showroomEventHandler знову додано на drive-btn');
    });
  }
});

function addNewArrival() {
  console.info('Запущено додавання нового авто у вітрину.');

  const newCarCard = document.createElement('div');
  newCarCard.className = 'car-card';

  const descText = document.createTextNode("Свіжий імпорт зі США, мінімальні пошкодження.");

  newCarCard.title = descText.data;

  newCarCard.append(descText);

  const badge = document.createElement('span');
  badge.textContent = "NEW! ";
  newCarCard.prepend(badge);

  const catalog = document.getElementById('main-offer');
  if (!catalog) {
    console.error('Блок main-offer не знайдено, додати авто неможливо.');
    return;
  }

  catalog.after(newCarCard);
  console.info('Нова картка авто додана після блоку main-offer.');

  const oldBtn = document.createElement('button');
  oldBtn.textContent = "Немає в наявності";
  newCarCard.append(oldBtn);

  const newBtn = document.createElement('button');
  newBtn.textContent = "Забронювати";

  setTimeout(() => {
    oldBtn.replaceWith(newBtn);
    console.info('Кнопку стану замінено на кнопку бронювання.');

    newBtn.onclick = function () {
      newCarCard.remove();
      console.log('Картку нового авто видалено після бронювання.');
      alert("Авто заброньовано і прибрано з вітрини!");
    };
  }, 2500);
}


