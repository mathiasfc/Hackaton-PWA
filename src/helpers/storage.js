import store from 'store';

class Storage {
  static cookLocalStorageKey(key) {
    return key ? `core-4all_${key}` : null;
  }

  static setLocalStorage(key, value, exp) {
    if (key && value) {
      const formatedKey = this.cookLocalStorageKey(key);
      store.set(formatedKey, {
        value,
        exp: exp || null,
        time: new Date().getTime(),
      });

      return store.get(formatedKey);
    }
    return null;
  }

  static getLocalStorage(key) {
    const info = store.get(this.cookLocalStorageKey(key));

    if (!info) return null;
    if (info.exp && new Date().getTime() - info.time > info.exp) return null;

    return info.value;
  }

  static clear() {
    store.clearAll();
  }
}

export default Storage;
