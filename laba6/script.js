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
  const consultationButton = document.getElementById('consultation-btn');
  if (consultationButton) {
    consultationButton.addEventListener('click', () => {
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
    });
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
  if (offersButton) {
    offersButton.addEventListener('click', showCurrentOffers);
  }

  const catalogButton = document.getElementById('catalog-btn');
  if (catalogButton) {
    catalogButton.addEventListener('click', redirectToCatalog);
  }

  const homeButton = document.getElementById('home-btn');
  if (homeButton) {
    homeButton.addEventListener('click', () => {
      location.href = 'index.html';
    });
  }

  const arrivalButton = document.getElementById('arrival-btn');
  if (arrivalButton) {
    arrivalButton.addEventListener('click', addNewArrival);
  }

  const backgroundButton = document.getElementById('background-btn');
  if (backgroundButton) {
    backgroundButton.addEventListener('click', activateEcoMode);
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