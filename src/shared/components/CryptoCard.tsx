import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Crypto } from '../../core/models/Crypto';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../types/StackParamList';
import { useThemeHook } from '../hooks/useThemeHook';
import { formatNumberCompact } from '../../core/utils/formatters';
import { Card, Change, CryptoName, NameBlock, Price, Row, SmallInfo, Symbol } from './CryptoCard.styles';

export default function CryptoCard({ crypto }: { crypto: Crypto }) {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  /**
   * navigate to the crypto detail screen
   */
  const goDetailView = () => {
    navigation.navigate('Detail', { crypto });
  };

  return (
    <TouchableOpacity onPress={goDetailView} activeOpacity={0.9}>
      <Card>
        <Row>
          <Row>
            <Image source={{ uri: crypto.image }} style={styles.icon} />
            <NameBlock>
              <CryptoName>{crypto.name}</CryptoName>
              <Symbol>{crypto.symbol.toUpperCase()}</Symbol>
            </NameBlock>
          </Row>
          <View>
            <Price>USD: {formatNumberCompact(Number(crypto.price_usd))}</Price>
            <Change positive={crypto.change24h >= 0}>
              {crypto.change24h.toFixed(2)}%
            </Change>
          </View>
        </Row>

        <View style={{ marginTop: 12 }}>
          <SmallInfo>Market Cap: ${formatNumberCompact(Number(crypto.marketCap))}</SmallInfo>
          <SmallInfo>Volumen 24h: ${formatNumberCompact(Number(crypto.volume24))}</SmallInfo>
          <SmallInfo>Ranking: #{crypto.rank}</SmallInfo>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eee',
  },
});