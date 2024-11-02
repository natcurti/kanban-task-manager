export class LocalStorage {
  static setItemOnStorage(key: string, item: string) {
    localStorage.setItem(key, item);
  }
  static getItemFromStorage(key: string) {
    const item = localStorage.getItem(key);
    return item;

    // if (item) {
    //   return JSON.parse(item);
    // }
    // return null;
  }
  static deleteItemFromStorage(key: string) {
    localStorage.removeItem(key);
  }
}
