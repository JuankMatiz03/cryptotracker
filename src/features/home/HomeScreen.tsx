import React, { useCallback, useEffect, useState } from 'react';
import { Switch, ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { useThemeHook } from '../../shared/hooks/useThemeHook';
import { useCryptoStoreHook } from '../../shared/hooks/UseCryptoStoreHook';
import CryptoCard from '../../shared/components/CryptoCard';
import {
  Container,
  Header,
  LoadingContainer,
  SearchInput,
  ThemeIcon,
  ThemeSwitcherContainer,
  Title
} from './HomeScreen.styles';

export default function HomeScreen() {
  const { isDark, toggleTheme } = useThemeHook();
  const { cryptos, isLoading, loadMoreCryptos } = useCryptoStoreHook();
  const [searchText, setSearchText] = useState('');
  const [filteredCryptos, setFilteredCryptos] = useState(cryptos);

  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredCryptos(cryptos);
    } else {
      const filtered = cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchText.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCryptos(filtered);
    }
  }, [searchText, cryptos]);

  const handleEndReached = useCallback(() => {
    if (!isLoading) {
      loadMoreCryptos();
    }
  }, [isLoading, loadMoreCryptos]);

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <CryptoCard crypto={item} />
  );

  return (
    <>
      <Header>
        <Title>Crypto Tracker</Title>
        <ThemeSwitcherContainer>
          <ThemeIcon>{isDark ? '🌙' : '☀️'}</ThemeIcon>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            thumbColor={isDark ? '#bb86fc' : '#15d5d2'}
            trackColor={{ false: '#ccc', true: '#444' }}
          />
        </ThemeSwitcherContainer>
      </Header>

      <Container>
        <SearchInput
          placeholder="Buscar criptomoneda"
          placeholderTextColor={isDark ? '#aaa' : '#666'}
          value={searchText}
          onChangeText={setSearchText}
        />

        {isLoading && cryptos.length === 0 ? (
          <LoadingContainer>
            <ActivityIndicator size="large" color={isDark ? '#c115d5' : '#15d5d2'} />
          </LoadingContainer>
        ) : (
          <FlatList
            data={filteredCryptos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isLoading ? (
                <LoadingContainer>
                  <ActivityIndicator size="large" color={isDark ? '#c115d5' : '#15d5d2'} />
                </LoadingContainer>
              ) : null
            }
          />
        )}
      </Container>
    </>
  );
}
