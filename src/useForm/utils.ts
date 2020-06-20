type touched = {
  [key: string]: boolean;
};

export const touchedFunction = (values = {}): touched =>
  Object.keys(values)
    .map((key) => ({
      [key]: false,
    }))
    .reduce((returnObject, next) => ({ ...returnObject, ...next }), {});

export const resetTouchedFunction = (touched: touched = {}): touched =>
  Object.keys(touched)
    .map((val) => ({ [val]: false }))
    .reduce((returnObject, next) => ({ ...returnObject, ...next }), {});
