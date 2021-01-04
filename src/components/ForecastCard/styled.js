import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 22px 22px;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 2px 8px 4px;
  shadow-opacity: 0.24;
  shadow-radius: 1rem;
  shadow-color: black;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 22px 0px;
`;

export const WeatherWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0px 22px 22px;
`;

export const Title = styled.Text`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
