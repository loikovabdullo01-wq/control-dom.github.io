// ============================================================================
// data.js — ЛОКАЛЬНАЯ БАЗА ДАННЫХ проекта «ХИСРАВ СОХТМОН»
// ============================================================================
//
// 📌 Все данные хранятся прямо здесь. Изменения через UI сохраняются в
//    localStorage браузера.
//
// 🔄 СБРОС к содержимому этого файла — клик по надписи «💾 Локальные данные»
//    внизу сайдбара, или window.restoreAllData() в консоли.
//
// ✏️ После правки этого файла увеличьте DATA_VERSION на 1, чтобы сбросить
//    localStorage-кэш и перечитать данные из этого файла.
//
// 📊 СОСТАВ ДАННЫХ (на главной странице отображается именно это):
//    • Всего объектов: 255
//    • Свободно:       189
//    • Продано:        3   (Блок В)
//    • Рассрочка:      54  (Блок А: 9, Блок Б: 20, Блок В: 25)
//    • Зарезервировано: 9  (Блок В, не отображаются в статистике)
//    • Получено:  14 254 609 с.
//    • Остаток:   19 352 719 с.
//
// 👉 Структура одной квартиры:
//    {
//      id, houseId, block, type, floor, number, rooms, area,
//      price, totalPrice, status, clientId, installment, paid, debt
//    }
//
//    status: 'available' | 'sold' | 'installment' | 'reserved'
//
// 👉 ЧТОБЫ ПОМЕНЯТЬ ДАННЫЕ ВРУЧНУЮ:
//    • Отредактируйте функции генерации ниже (buildBlock, CLIENT_NAMES),
//      ИЛИ замените автоматическую генерацию на явный массив.
//    • Если нужны конкретные статусы — правьте STATUS_PLAN.
//    • После правки: увеличьте DATA_VERSION на 1 и обновите страницу.
//
// 👉 Если редактируете массив `apartments` вручную, следите, чтобы
//    суммы `paid` и `debt` по всем не-available квартирам совпадали с
//    указанными выше целевыми числами (главная считает их из `payments`,
//    но поля `paid`/`debt` тоже поддерживаются в актуальном состоянии).
// ============================================================================

export const DATA_VERSION = 4;

// ---------------------------------------------------------------------------
// 🏢 БЛОКИ
// ---------------------------------------------------------------------------
export const houses = [
  { id: 'block-a', name: 'Блок А', address: 'ул. Камоли Хучандий', floors: 10, status: 'не начали' },
  { id: 'block-b', name: 'Блок Б', address: 'ул. Камоли Хучандий', floors: 10, status: 'Строится' },
  { id: 'block-v', name: 'Блок В', address: 'ул. Камоли Хучандий', floors: 10, status: 'Почти готов' }
];

// ---------------------------------------------------------------------------
// 👥 ИМЕНА КЛИЕНТОВ (используются автоматически для продаж и рассрочек)
// ---------------------------------------------------------------------------
const CLIENT_NAMES = [
  'Сангов Илхомуддин Боронович',
  'Раҳимов Фирдавс Абдуллоевич',
  'Каримов Фаридун Ҳакимович',
  'Юсупов Хисрав Раҷабович',
  'Аҳмадов Рустам Сайфуллоевич',
  'Шарипов Далер Муродович',
  'Мирзоев Фарход Давлатович',
  'Ҳакимов Шерали Файзуллоевич',
  'Сафаров Бахтиёр Аҳмадович',
  'Назаров Рустамджон Наимович',
  'Юлдашев Джамшед Шарифович',
  'Турсунов Искандар Ҷӯраевич',
  'Исмоилов Манучеҳр Собирович',
  'Файзуллоев Сино Ҳамидович',
  'Холов Парвиз Раҳмонович',
  'Одинаев Насим Юсуфович',
  'Қурбонов Фирӯз Мансурович',
  'Махмудов Ҳайдар Тоҷиевич',
  'Салимов Сорбон Шокирович',
  'Рустамов Меҳроб Рустамович',
  'Саидов Умед Ҳасанович',
  'Абдуллоев Фаридун Саидович',
  'Холматов Сорбон Абдуллоевич',
  'Раҷабов Тоҳир Ҳакимович',
  'Шокиров Меҳрубон Файзуллоевич',
  'Соқиев Наим Ҷумъаевич',
  'Собиров Ҳасан Музафарович',
  'Давлатов Шоҳрух Исматович',
  'Муродов Иброҳим Қурбонович',
  'Музафаров Акрам Раҳимович',
  'Юсуфзода Меҳроб Сайфуллоевич',
  'Ҳасанов Шуҳрат Нуруллоевич',
  'Наимов Фирдавс Аслиддинович',
  'Акрамов Ҷамолиддин Ҳомидович',
  'Шарифов Мирзо Наимович',
  'Ҷӯраев Аҳмад Ҳайдарович',
  'Ҳомидов Некрӯз Файзуллоевич',
  'Мансуров Сироҷиддин Абдураҳмонович',
  'Тошматов Зафар Сафарович',
  'Асроров Рӯзимуҳаммад Шарифович',
  'Ҳайдаров Фирдавс Наимович',
  'Раупов Сайфулло Ҳакимович',
  'Салимов Ҷовидон Аҳмадович',
  'Одиназода Ҳунар Шодиевич',
  'Маҷидов Фирӯз Ҳайдарович',
  'Сафаров Абдурраҳмон Назарович',
  'Ҳакимзода Илҳом Шарифович',
  'Нуруллоев Қодирҷон Собирович',
  'Ҷумъаев Фирдавс Раҷабович',
  'Мирзоев Аслам Ҳакимович',
  'Ҳусейнов Икром Сафаралиевич',
  'Давлатзода Фирдавс Рустамович',
  'Раҳимзода Фирдавс Абдуллоевич',
  'Сафаров Ҳусейн Шокирович',
  'Назаров Иброҳим Муродович',
  'Ҳакимов Сино Давлатович',
  'Азизов Фирдавс Синоевич'
];

function makePhone(i) {
  const a = String(50 + (i * 3) % 50).padStart(2, '0');
  const b = String(100 + (i * 37) % 900).padStart(3, '0');
  const c = String(10 + (i * 11) % 90).padStart(2, '0');
  const d = String(10 + (i * 23) % 90).padStart(2, '0');
  return `+992 ${a} ${b} ${c} ${d}`;
}

// ---------------------------------------------------------------------------
// ЭКСПОРТИРУЕМЫЕ МАССИВЫ (наполняются ниже)
// ---------------------------------------------------------------------------
export const clients = [];
export const apartments = [];
export const payments = [];
export const reports = [];

// ---------------------------------------------------------------------------
// 🏠 ГЕНЕРАЦИЯ КВАРТИР ОДНОГО БЛОКА (85 объектов)
// ---------------------------------------------------------------------------
// Раскладка внутри блока:
//   •  0– 4  ( 5 шт.) подвал
//   •  5–10  ( 5 шт.) коммерческие, 1 этаж
//   • 11–16  ( 5 шт.) коммерческие, 2 этаж
//   • 17–79  (56 шт.) жилые, этажи 3–9, по 9 на этаж
//   • 80–84  ( 5 шт.) пентхаусы, 10 этаж
// ---------------------------------------------------------------------------
function buildBlock(house) {
  const list = [];

  // ----- Подвал -----
  for (let i = 0; i < 5; i++) {
    list.push({
      id: null,
      houseId: house.id,
      block: house.name,
      type: 'basement',
      floor: 0,
      number: `П${String(i + 1).padStart(2, '0')}`,
      rooms: 0,
      area: 30 + i * 2,             // 30, 32, 34, 36, 38
      price: 25000 + i * 3000,      // 25 000 … 37 000
      totalPrice: 0,
      status: 'available',
      clientId: null,
      installment: null,
      paid: 0,
      debt: 0
    });
  }

  // ----- Коммерческие (этажи 1–2) -----
  for (let floor = 1; floor <= 2; floor++) {
    for (let i = 0; i < 5; i++) {
      const area = 50 + i * 5 + (floor - 1) * 5;
      list.push({
        id: null,
        houseId: house.id,
        block: house.name,
        type: 'commercial',
        floor,
        number: `${floor}${String(i + 1).padStart(2, '0')}`,
        rooms: 1,
        area,
        price: area * 2500,
        totalPrice: 0,
        status: 'available',
        clientId: null,
        installment: null,
        paid: 0,
        debt: 0
      });
    }
  }

  // ----- Жилые (этажи 3–9) -----
  for (let floor = 3; floor <= 9; floor++) {
    for (let i = 0; i < 8; i++) {
      const rooms = (i % 3) + 1;                     // 1, 2, 3, 1, 2, 3, 1, 2, 3
      const area  = 45 + rooms * 15 + (floor - 3) * 2;
      list.push({
        id: null,
        houseId: house.id,
        block: house.name,
        type: 'residential',
        floor,
        number: `${floor}${String(i + 1).padStart(2, '0')}`,
        rooms,
        area,
        price: area * 7750,
        totalPrice: 0,
        status: 'available',
        clientId: null,
        installment: null,
        paid: 0,
        debt: 0
      });
    }
  }

  // ----- Пентхаусы (10 этаж) -----
  for (let i = 0; i < 5; i++) {
    const area = 140 + i * 10;
    list.push({
      id: null,
      houseId: house.id,
      block: house.name,
      type: 'penthouse',
      floor: 10,
      number: `10${String(i + 1).padStart(2, '0')}`,
      rooms: 4,
      area,
      price: area * 7750 + 50000,
      totalPrice: 0,
      status: 'available',
      clientId: null,
      installment: null,
      paid: 0,
      debt: 0
    });
  }

  return list; // 85 объектов
}

// ----- Построить все 255 квартир -----
houses.forEach((house, hIdx) => {
  const blockApts = buildBlock(house);
  blockApts.forEach((apt, localIdx) => {
    apt.id = `apt-${hIdx * 85 + localIdx + 1}`;
    apt.totalPrice = apt.price;
    apartments.push(apt);
  });
});

// ---------------------------------------------------------------------------
// 📌 НАЗНАЧЕНИЕ СТАТУСОВ
// ---------------------------------------------------------------------------
// Локальные индексы внутри блока (0..84):
//   Блок А: рассрочка = [17..25]                                    →  9
//   Блок Б: рассрочка = [17..36]                                    → 20
//   Блок В: рассрочка = [17..41], sold = [42,43,44], reserved = [45..53]
//                                                                   → 25 + 3 + 9
// ---------------------------------------------------------------------------
const STATUS_PLAN = [
  {
    inst: [17, 18, 19, 20, 21, 22, 23, 24, 25]
  },
  {
    inst: [17, 18, 19, 20, 21, 22, 23, 24, 25,
           26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
  },
  {
    inst:     [17, 18, 19, 20, 21, 22, 23, 24, 25,
               26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
               37, 38, 39, 40, 41],
    sold:     [42, 43, 44],
    reserved: [45, 46, 47, 48, 49, 50, 51, 52, 53]
  }
];

STATUS_PLAN.forEach((plan, hIdx) => {
  const offset = hIdx * 85;
  plan.inst.forEach(li => { apartments[offset + li].status = 'installment'; });
  (plan.sold || []).forEach(li => { apartments[offset + li].status = 'sold'; });
  (plan.reserved || []).forEach(li => { apartments[offset + li].status = 'reserved'; });
});

// ---------------------------------------------------------------------------
// 👥 КЛИЕНТЫ + 💳 ПЛАТЕЖИ
// ---------------------------------------------------------------------------
let clientIdx = 0;
function nextClient() {
  clientIdx++;
  const cid = `c-${clientIdx}`;
  const name = CLIENT_NAMES[(clientIdx - 1) % CLIENT_NAMES.length];
  const client = { id: cid, name, phone: makePhone(clientIdx), email: '' };
  clients.push(client);
  return client;
}

const START_DATE = '2025-08-01';

function addMonths(dateStr, n) {
  const [y, m] = dateStr.split('-').map(Number);
  const total = y * 12 + (m - 1) + n;
  const newY = Math.floor(total / 12);
  const newM = (total % 12) + 1;
  const lastDay = new Date(newY, newM, 0).getDate();
  return `${newY}-${String(newM).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
}

// ----- Продажи (3 квартиры, полная оплата) -----
apartments.filter(a => a.status === 'sold').forEach((apt, idx) => {
  const client = nextClient();
  apt.clientId = client.id;
  apt.paid = apt.price;
  apt.debt = 0;

  payments.push({
    id: `p-${client.id}-sold`,
    apartmentId: apt.id,
    clientId: client.id,
    date: `2025-0${7 + idx}-15`,
    amount: apt.price,
    status: 'paid'
  });
});

// ----- Рассрочки (54 квартиры) -----
// Первые 32 рассрочки: 5 оплаченных месяцев (k = 5)
// Остальные 22:        4 оплаченных месяца (k = 4)
// Среднее ≈ 4.6 оплаченных месяца — именно это даёт нужное соотношение
// «Получено / Остаток» на главной странице.
let instCounter = 0;
apartments.filter(a => a.status === 'installment').forEach(apt => {
  instCounter++;
  const paidMonths = instCounter <= 32 ? 5 : 4;

  const client = nextClient();
  apt.clientId = client.id;

  // Первоначальный взнос 30%, остаток равномерно на 36 месяцев
  const initial  = Math.round(apt.price * 0.3 / 1000) * 1000;
  const financed = apt.price - initial;
  const monthly  = Math.round(financed / 36 / 100) * 100;

  apt.installment = {
    months: 36,
    termYears: 3,
    startDate: START_DATE,
    initialPayment: initial,
    monthlyPayment: monthly
  };

  apt.paid = initial + paidMonths * monthly;
  apt.debt = apt.price - apt.paid;

  // Первоначальный взнос (оплачен)
  payments.push({
    id: `p-${client.id}-init`,
    apartmentId: apt.id,
    clientId: client.id,
    date: START_DATE,
    amount: initial,
    status: 'paid'
  });

  // Оплаченные месячные платежи
  for (let i = 1; i <= paidMonths; i++) {
    payments.push({
      id: `p-${client.id}-m${i}`,
      apartmentId: apt.id,
      clientId: client.id,
      date: addMonths(START_DATE, i),
      amount: monthly,
      status: 'paid'
    });
  }

  // Остальные платежи: pending / overdue / partial
  const today = new Date();
  for (let i = paidMonths + 1; i <= 36; i++) {
    const date = addMonths(START_DATE, i);
    const isPast = new Date(date) < today;
    let status;
    if (isPast)              status = 'overdue';
    else if (i % 7 === 0)    status = 'partial';
    else                     status = 'pending';

    payments.push({
      id: `p-${client.id}-m${i}`,
      apartmentId: apt.id,
      clientId: client.id,
      date,
      amount: monthly,
      status
    });
  }
});

// ---------------------------------------------------------------------------
// 🎯 ФИНАЛЬНАЯ КОРРЕКТИРОВКА
// ---------------------------------------------------------------------------
// Приводим точные суммы «Получено» и «Остаток» к целевым значениям
// (14 254 609 и 19 352 719). Небольшой паевой сдвиг распределяется по
// платежам последней рассрочки, чтобы не портить реалистичность
// остальных квартир.
// ---------------------------------------------------------------------------
(function adjustTotalsToTargets() {
  const TARGET_PAID    = 14254609;
  const TARGET_PENDING = 19352719;
  const pendingStatuses = ['pending', 'unpaid', 'overdue', 'partial'];

  const clientIds = new Set(clients.map(c => c.id));

  const currentPaid = payments
    .filter(p => p.status === 'paid')
    .reduce((s, p) => s + p.amount, 0);

  const currentPending = payments
    .filter(p => clientIds.has(p.clientId))
    .filter(p => pendingStatuses.includes(p.status))
    .reduce((s, p) => s + p.amount, 0);

  const paidDelta    = TARGET_PAID    - currentPaid;
  const pendingDelta = TARGET_PENDING - currentPending;

  if (paidDelta === 0 && pendingDelta === 0) return;

  const lastInst = apartments.filter(a => a.status === 'installment').pop();
  const lastClientId = lastInst.clientId;

  // Оплаченные платежи последней рассрочки
  if (paidDelta !== 0) {
    const paidPmts = payments.filter(p =>
      p.clientId === lastClientId && p.status === 'paid'
    );
    let remaining = paidDelta;
    const per = Math.trunc(remaining / paidPmts.length);
    paidPmts.forEach(p => { p.amount += per; remaining -= per; });
    if (remaining !== 0) paidPmts[paidPmts.length - 1].amount += remaining;
  }

  // Ожидающие платежи последней рассрочки
  if (pendingDelta !== 0) {
    const pendingPmts = payments.filter(p =>
      p.clientId === lastClientId && pendingStatuses.includes(p.status)
    );
    let remaining = pendingDelta;
    const per = Math.trunc(remaining / pendingPmts.length);
    pendingPmts.forEach(p => { p.amount += per; remaining -= per; });
    if (remaining !== 0) pendingPmts[pendingPmts.length - 1].amount += remaining;
  }

  // Синхронизируем информационные поля последней квартиры
  lastInst.paid = payments
    .filter(p => p.clientId === lastClientId && p.status === 'paid')
    .reduce((s, p) => s + p.amount, 0);
  lastInst.debt = payments
    .filter(p => p.clientId === lastClientId && pendingStatuses.includes(p.status))
    .reduce((s, p) => s + p.amount, 0);
  lastInst.price = lastInst.paid + lastInst.debt;
  lastInst.totalPrice = lastInst.price;
})();