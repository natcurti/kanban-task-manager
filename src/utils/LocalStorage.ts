export class LocalStorage {
  static setItemOnStorage(key: string, item: string) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, item);
    }
  }
  static getItemFromStorage(key: string) {
    if (typeof window !== "undefined" && window.localStorage) {
      const item = localStorage.getItem(key);
      return item;
    }
  }
  static deleteItemFromStorage(key: string) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  }
}
