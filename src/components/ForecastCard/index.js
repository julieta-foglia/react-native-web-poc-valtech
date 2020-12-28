import React from 'react';
import {
  Wrapper,
  TitleWrapper,
  Title,
  Subtitle,
  Image,
  WeatherWrapper,
} from './styled';
const options = {
  weekday: 'long',
};

const ForecastCard = ({ forecastData }) => {
  const getFormattedDate = (timestamp) => {
    const event = new Date(timestamp * 1000);
    return event.toLocaleDateString('es-ES', options);
  };

  return (
    <>
      <TitleWrapper>
        <Title>Pronóstico del Tiempo</Title>
      </TitleWrapper>
      <WeatherWrapper>
        {forecastData.map((day) => {
          return (
            <Wrapper key={day.dt}>
              <Subtitle>{getFormattedDate(day.dt)}</Subtitle>
              <Image
                source={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
              <Subtitle>{day.weather[0].description}</Subtitle>
              <Subtitle>Min: {parseFloat(day.temp.min).toFixed(1)} °C</Subtitle>
              <Subtitle>Max: {parseFloat(day.temp.max).toFixed(1)} °C</Subtitle>
            </Wrapper>
          );
        })}
      </WeatherWrapper>
    </>
  );
};

export default ForecastCard;
