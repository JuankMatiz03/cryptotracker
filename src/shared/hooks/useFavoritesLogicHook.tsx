import { useEffect, useState } from 'react';
import { FavoriteService } from '../../core/services/FavoriteService';


export function useFavoritesLogicHook() {
  const [favorites, setFavorites] = useState<string[]>([]);

  /**
   * load favorites from storage on mount
   */
  useEffect(() => {
    FavoriteService.getFavorites().then(setFavorites);
  }, []);

  /**
   * save favorites to storage when they change
   */
  useEffect(() => {
    FavoriteService.saveFavorites(favorites);
  }, [favorites]);

  /**
   * add or remove a crypto from favorites
   * @param id crypto id
   */
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  /**
   * check if a crypto is in favorites
   * @param id crypto id
   * @returns true if the crypto is favorite
   */
  const isFavorite = (id: string) => favorites.includes(id);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
}
