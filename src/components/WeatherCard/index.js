import React from 'react';
import {
  Wrapper,
  TitleWrapper,
  Title,
  Subtitle,
  Image,
  WeatherWrapper,
  Card,
} from './styled';

const WeatherCard = ({ currentLocation, weatherData }) => {
  return (
    <Wrapper>
      <Card>
        <TitleWrapper>
          <Title>{currentLocation.city}</Title>
          <Subtitle>{currentLocation.country}</Subtitle>
        </TitleWrapper>
        <WeatherWrapper>
          <Image
            source={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <Subtitle>{weatherData.weather[0].description}</Subtitle>
          <Title>{parseFloat(weatherData.temp).toFixed(1)} °C</Title>
          <Subtitle>
            ST: {parseFloat(weatherData.feels_like).toFixed(1)} °C
          </Subtitle>
        </WeatherWrapper>
      </Card>
    </Wrapper>
  );
};

export default WeatherCard;
