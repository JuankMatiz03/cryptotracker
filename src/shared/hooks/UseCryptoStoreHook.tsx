import { useEffect, useState, useCallback } from 'react';
import { getCryptos } from '../../core/api/CryptoApi';
import { Crypto } from '../../core/models/Crypto';

const PAGE_SIZE = 20;

export function useCryptoStoreHook() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [start, setStart] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  /**
   * fetches a page of cryptocurrencies and appends them to the existing list
   * updates pagination and state flags accordingly
   */
  const fetchCryptos = useCallback(async () => {
    try {
      setIsLoading(true);
      const newCryptos = await getCryptos(start, PAGE_SIZE);
      setCryptos((prev) => [...prev, ...newCryptos]);
      setStart((prev) => prev + PAGE_SIZE);

      if (newCryptos.length < PAGE_SIZE) setHasMore(false);
    } catch (err) {
      setError('Error fetching data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [start]);

  /**
   * loads the initial page of cryptocurrencies on mount
   */
  useEffect(() => {
    fetchCryptos();
  }, []);

  /**
   * loads the next page of cryptocurrencies if available and not already loading
   */
  const loadMoreCryptos = () => {
    if (!isLoading && hasMore) {
      fetchCryptos();
    }
  };

  return {
    cryptos,
    isLoading,
    error,
    loadMoreCryptos,
    hasMore,
  };
}
