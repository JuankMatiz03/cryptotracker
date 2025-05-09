import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props: any) => props.theme.card};
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props: any) => props.theme.text};
`;

export const Heart = styled.Text`
  font-size: 18px;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  padding-horizontal: 16px;
  background-color: ${(props: any) => props.theme.background};
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-horizontal: 12px;
  margin-horizontal: 16px;
  margin-bottom: 12px;
  color: ${(props: any) => props.theme.text};
`;

export const LoadingContainer = styled.View`
  padding-vertical: 24px;
  justify-content: center;
  align-items: center;
`;

export const ThemeSwitcherContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ThemeIcon = styled.Text`
  font-size: 18px;
`;
