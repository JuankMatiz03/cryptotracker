import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding-bottom: 40px;
  background-color: ${(props: any) => props.theme.card};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props: any) => props.theme.card};
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props: any) => props.theme.text};
`;

export const BackButton = styled.Text`
  font-size: 22px;
  padding-right: 10px;
  color: ${(props: any) => props.theme.text};
`;

export const Favorite = styled.Text`
  font-size: 22px;
`;

export const Touchable = styled.TouchableOpacity``;

export const Card = styled.View`
  margin: 10px;
  padding: 20px;
  background-color: ${(props: any) => props.theme.card};
  border-radius: 20px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  shadow-offset: 0px 4px;
  elevation: 5;
`;

export const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const NameBlock = styled.View`
  margin-left: 16px;
  color: ${(props: any) => props.theme.text};
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props: any) => props.theme.text};
`;

export const Symbol = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const StatsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Price = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${(props: any) => props.theme.text};
`;

export const Change = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${(props: any) => props.theme.text};
`;

export const Positive = styled(Change)`
  color: green;
`;

export const Negative = styled(Change)`
  color: red;
`;

export const ExtraInfo = styled.View`
  margin-top: 20px;
  gap: 6px;
`;

export const TextSmall = styled.Text`
  color: ${(props: any) => props.theme.text};
`;

export const ChartTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-vertical: 10px;
  text-align: center;
  color: ${(props: any) => props.theme.text};
`;

export const chartConfig = (color: string, isDarkMode: boolean) => ({
  backgroundColor: isDarkMode ? '#000' : '#fff',
  backgroundGradientFrom: isDarkMode ? '#111' : '#fff',
  backgroundGradientTo: isDarkMode ? '#222' : '#fff',
  decimalPlaces: 2,
  color: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
  labelColor: () => isDarkMode ? '#ccc' : '#333',
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: color,
  },
});

