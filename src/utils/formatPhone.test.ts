import { clearNumber, formatPhone } from './formatPhone';

describe('Очистка телефона 1', () => {
  const phone = '+7 (999) 111-22-33';
  const cleared = '9991112233';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 2', () => {
  const phone = '+7 (999) 111-22-';
  const cleared = '99911122';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 3', () => {
  const phone = '+7 (999) 111-22';
  const cleared = '99911122';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 4', () => {
  const phone = '+7 (999) 111-2';
  const cleared = '9991112';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 5', () => {
  const phone = '+7 (999) 111-';
  const cleared = '999111';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 6', () => {
  const phone = '+7 (999) 111';
  const cleared = '999111';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 7', () => {
  const phone = '+7 (999) 11';
  const cleared = '99911';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 8', () => {
  const phone = '+7 (999) 1';
  const cleared = '9991';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 9', () => {
  const phone = '+7 (999) ';
  const cleared = '999';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 10', () => {
  const phone = '+7 (99';
  const cleared = '99';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 11', () => {
  const phone = '+7 (9';
  const cleared = '9';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 12', () => {
  const phone = '+7 (';
  const cleared = '';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 13', () => {
  const phone = '+7 (999) 111-22-335'; '80855535'
  const cleared = '9991112233';

  const value = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(cleared);
  });
});

describe('Очистка телефона 14', () => {
  const phone = '+7 (800)-555-35-35';
  const formated = '8005553535';

  const value1 = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});

describe('Очистка телефона 15', () => {
  const phone = '+7 (808)-555-35-35';
  const formated = '8085553535';

  const value1 = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});

describe('Очистка телефона 16', () => {
  const phone = '+7 (808)-555-35-';
  const formated = '80855535';

  const value1 = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});

describe('Очистка телефона 17', () => {
  const phone = '8 (808)-555-35-';
  const formated = '80855535';

  const value1 = clearNumber(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});

describe('Форматирование телефона 1', () => {
  const phone = '+7 (999)-111-22-33';
  const formated = '+7 (999)-111-22-33';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 2', () => {
  const phone = '+7 (999)-111-22-3';
  const formated = '+7 (999)-111-22-3';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 3', () => {
  const phone = '+7 (999)-111-22-';
  const formated = '+7 (999)-111-22';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 4', () => {
  const phone = '+7 (999)-111-22';
  const formated = '+7 (999)-111-22';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 5', () => {
  const phone = '+7 (999)-111-2';
  const formated = '+7 (999)-111-2';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 6', () => {
  const phone = '+7 (999)-111-';
  const formated = '+7 (999)-111';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 7', () => {
  const phone = '+7 (999)-11';
  const formated = '+7 (999)-11';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 8', () => {
  const phone = '+7 (999)-1';
  const formated = '+7 (999)-1';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 9', () => {
  const phone = '+7 (999)-';
  const formated = '+7 (999';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 10', () => {
  const phone = '+7 (999';
  const formated = '+7 (999';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 11', () => {
  const phone = '+7 (99';
  const formated = '+7 (99';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 12', () => {
  const phone = '+7 (9';
  const formated = '+7 (9';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 13', () => {
  const phone = '+7 (';
  const formated = '+7 (';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 13', () => {
  const phone = '+7 ';
  const formated = '+7 (';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 14', () => {
  const phone = '+7';
  const formated = '+7 (';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 15', () => {
  const phone = '+';
  const formated = '+7 (';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 16', () => {
  const phone = '';
  const formated = '+7 (';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 17', () => {
  const phone = '+7 (999)-111-22-333';
  const formated = '+7 (999)-111-22-33';

  const value = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value).toEqual(formated);
  });
});

describe('Форматирование телефона 18', () => {
  const phone = '+79991112233';
  const formated = '+7 (999)-111-22-33';

  const value1 = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});

describe('Форматирование телефона 19', () => {
  const phone = '88005553535';
  const formated = '+7 (800)-555-35-35';

  const value1 = formatPhone(phone);

  it('Должны быть одинаковые', () => {
    expect(value1).toEqual(formated);
  });
});
