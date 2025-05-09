import AsyncStorage from '@react-native-async-storage/async-storage';

//Primary key
const FAVORITES_KEY = 'favorites';

export const FavoriteService = {

  /**
   * get the list of favorite crypto IDs from async storage
   * @returns a promise that resolves to an array of favorite IDs
   */
  async getFavorites(): Promise<string[]> {
    try {
      const raw = await AsyncStorage.getItem(FAVORITES_KEY);
      console.log("raw", raw)
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Error loading favorites:', e);
      return [];
    }
  },

  /**
   * save the list of favorite crypto IDs to async storage
   * @param favorites - array of crypto IDs to store
   */
  async saveFavorites(favorites: string[]): Promise<void> {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  },
};
