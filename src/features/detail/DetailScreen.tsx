import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useFavoriteCryptoHook } from '../../shared/hooks/useFavoriteCryptoHook';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../shared/types/StackParamList';
import { formatNumberCompact, formatChartDataWithSuffix } from '../../core/utils/formatters';
import {
  Container, Header, HeaderTitle, BackButton, Favorite, Touchable,
  Card, TopRow, Icon, NameBlock, Name, Symbol, StatsRow,
  Price, Positive, Negative, ExtraInfo, TextSmall, ChartTitle, chartConfig
} from './DetailScreen.styles';
import { useThemeHook } from '../../shared/hooks/useThemeHook';
const screenWidth = Dimensions.get('window').width;

export default function DetailScreen() {
  const { isDark } = useThemeHook();
  const route = useRoute<RouteProp<StackParamList, 'Detail'>>();
  const navigation = useNavigation();
  const { crypto } = route.params;
  const { isFavorite, toggleFavorite } = useFavoriteCryptoHook(crypto.id.toString(), crypto.name);

  const { formattedData: chartPricesFormatted, suffix: priceSuffix } = formatChartDataWithSuffix([
    crypto.price * 0.98,
    crypto.price * 0.99,
    crypto.price,
    crypto.price * 1.01,
    crypto.price * 1.02,
  ]);

  const { formattedData: variationChartFormatted, suffix: variationSuffix } = formatChartDataWithSuffix([
    crypto.price * 0.97,
    crypto.price * 1.02,
    crypto.price * 0.99,
    crypto.price * 1.01,
    crypto.price,
  ]);

  const { formattedData: volumeChartFormatted, suffix: volumeSuffix } = formatChartDataWithSuffix([
    crypto.volume24a * 0.8,
    crypto.volume24a * 0.95,
    crypto.volume24a,
    crypto.volume24a * 1.05,
    crypto.volume24a * 1.2,
  ]);

  const { formattedData: dailyFluctuationChartFormatted, suffix: fluctuationSuffix } = formatChartDataWithSuffix([
    crypto.price * 0.95,
    crypto.price * 1.03,
    crypto.price * 0.98,
    crypto.price * 1.02,
    crypto.price * 0.99,
  ]);

  return (
    <Container>
      <Header>
        <Touchable onPress={() => navigation.goBack()}>
          <BackButton>◀</BackButton>
        </Touchable>
        <HeaderTitle>{crypto.name}</HeaderTitle>
        <Touchable onPress={toggleFavorite}>
          <Favorite>{isFavorite ? '❤️' : '🤍'}</Favorite>
        </Touchable>
      </Header>

      <Card isFavorite={isFavorite}>
        <TopRow>
          <Icon source={{ uri: crypto.image }} />
          <NameBlock>
            <Name>{crypto.name}</Name>
            <Symbol>{crypto.symbol.toUpperCase()}</Symbol>
          </NameBlock>
        </TopRow>

        <StatsRow>
          <Price>USD: {formatNumberCompact(Number(crypto.price_usd))}</Price>
          {crypto.change24h < 0 ? (
            <Negative>{crypto.change24h}%</Negative>
          ) : (
            <Positive>{crypto.change24h}%</Positive>
          )}
        </StatsRow>

        <ExtraInfo>
          <TextSmall>Market Cap: ${formatNumberCompact(Number(crypto.marketCap))}</TextSmall>
          <TextSmall>Volume 24h: ${formatNumberCompact(crypto.volume24)}</TextSmall>
          <TextSmall>Rank: #{crypto.rank}</TextSmall>
        </ExtraInfo>

        <ChartTitle>Histórico (24h)</ChartTitle>
        <LineChart
          data={{
            labels: ['00h', '06h', '12h', '18h', '24h'],
            datasets: [{ data: chartPricesFormatted }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisSuffix={priceSuffix}
          chartConfig={chartConfig('#1f77ff', isDark)}
          style={{ borderRadius: 12 }}
        />

        <ChartTitle>Variación porcentual</ChartTitle>
        <LineChart
          data={{
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
            datasets: [{ data: variationChartFormatted }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel={variationSuffix}
          chartConfig={chartConfig('#ff6384', isDark)}
          style={{ borderRadius: 12 }}
        />

        <ChartTitle>Volumen relativo (24h)</ChartTitle>
        <LineChart
          data={{
            labels: ['00h', '06h', '12h', '18h', '24h'],
            datasets: [{ data: volumeChartFormatted }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel={volumeSuffix}
          chartConfig={chartConfig('#36a2eb', isDark)}
          style={{ borderRadius: 12 }}
        />

        <ChartTitle>Fluctuación diaria</ChartTitle>
        <LineChart
          data={{
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{ data: dailyFluctuationChartFormatted }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisLabel={fluctuationSuffix}
          chartConfig={chartConfig('#ffce56', isDark)}
          style={{ borderRadius: 12 }}
        />
      </Card>
    </Container>
  );
}
