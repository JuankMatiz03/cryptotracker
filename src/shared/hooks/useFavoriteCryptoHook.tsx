import { useFavoritesContext } from '../../context/FavoritesContext';
import Toast from 'react-native-toast-message';

export function useFavoriteCryptoHook(cryptoId: string, cryptoName?: string) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  /**
   * toggles the favorite status for the given cryptoId
   * and displays a toast notification
   */
  const handleToggle = () => {
    const wasFavorite = isFavorite(cryptoId);
    toggleFavorite(cryptoId);
    Toast.show({
      type: 'success',
      text1: wasFavorite
        ? `${cryptoName || 'Cripto'} eliminada de favoritos`
        : `${cryptoName || 'Cripto'} agregada a favoritos`,
      position: 'top',
      visibilityTime: 2000,
      text1Style: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },
    });
  };

  return {
    isFavorite: isFavorite(cryptoId),
    toggleFavorite: handleToggle,
  };
}
