
import styled from 'styled-components/native';

export const Card = styled.View`
  padding: 16px;
  margin: 10px 16px;
  border-radius: 16px;
  background-color: ${(props: any) => props.theme.card};
  border-color: ${(props: any) => props.theme.card_border};
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
  shadow-offset: 0px 4px;
  elevation: 3;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameBlock = styled.View`
  margin-left: 12px;
`;

export const CryptoName = styled.Text`
  color: ${(props: any) => props.theme.text};
  font-size: 16px;
  font-weight: 700;
`;

export const Symbol = styled.Text`
  color: ${(props: any) => props.theme.subtext};
  font-size: 12px;
  margin-top: 2px;
`;

export const Price = styled.Text`
  color: ${(props: any) => props.theme.text};
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
`;

export const Change = styled.Text<{ positive: boolean }>`
  color: ${(props: any) => (props.positive ? props.theme.positive : props.theme.negative)};
  font-size: 14px;
  font-weight: 500;
`;

export const SmallInfo = styled.Text`
  color: ${(props: any) => props.theme.subtext};
  font-size: 12px;
  margin-top: 4px;
`;



