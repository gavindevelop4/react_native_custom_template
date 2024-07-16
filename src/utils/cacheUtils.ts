import AsyncStorage from '@react-native-async-storage/async-storage'

export enum StorageKey {
  EXAMPLE = 'example',
}

const cacheUtils = {
  // store a string to the local storage
  async storeString(key: StorageKey, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error(e)
    }
  },

  // read a string from the local storage
  async getString(key: StorageKey): Promise<string | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
          resolve(value)
        }
        reject('Cannot get storage item')
      } catch (e) {
        reject(e)
      }
    })
  },

  // store a Json object to the local storage
  async storeJson(key: StorageKey, value: any) {
    try {
      const transformedValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, transformedValue)
    } catch (e) {
      console.error(e)
    }
  },

  // get a Json object from the local storage
  async getJson(key: StorageKey): Promise<any | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
          const parsedValue = JSON.parse(value)
          resolve(parsedValue)
        }
        reject('Cannot get storage item')
      } catch (e) {
        reject(e)
      }
    })
  },

  async delete(key: StorageKey) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.error(e)
    }
  },
}

export default cacheUtils
