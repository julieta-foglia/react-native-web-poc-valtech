import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { TopBar, WeatherCard, ForecastCard } from '../components';
import { LoaderWrapper, AppWrapper } from './styled';
import { getCurrentWeather, getCurrentForecast } from '../helpers/api';

class Home extends Component {
  state = {
    currentLocation: { city: 'Buenos Aires', country: 'Argentina' },
    weatherData: {},
    forecastData: {},
    isLoading: false,
  };

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  componentDidMount() {
    this.setWeather(this.state.currentLocation);
  }

  setWeather = async ({ city }) => {
    this.setState({ isLoading: true });
    await this.getWeather(city);
    await this.getForecast(city);
    this.setState({ isLoading: false });
  };

  getWeather = async (city) => {
    const { weatherData } = await getCurrentWeather(city);
    const { current } = weatherData;
    this.setState({ weatherData: current });
  };

  getForecast = async (city) => {
    const { forecastData } = await getCurrentForecast(city);
    let { daily } = forecastData;
    daily = daily.filter(
      (dia) => daily.indexOf(dia) > 0 && daily.indexOf(dia) < 6
    );
    this.setState({ forecastData: daily });
  };

  changeLocation = async ({ city, country }) => {
    this.setWeather({ city });
    this.setState({ currentLocation: { city, country } });
  };

  isFetching = () =>
    this.state.isLoading ||
    this.isEmpty(this.state.weatherData) ||
    this.isEmpty(this.state.forecastData);

  render() {
    const { currentLocation, weatherData, forecastData } = this.state;

    return (
      <AppWrapper>
        <TopBar changeLocation={this.changeLocation} />
        {this.isFetching() ? (
          <LoaderWrapper>
            <ActivityIndicator size="large" color="#ffefd5" />
          </LoaderWrapper>
        ) : (
          <>
            <WeatherCard
              currentLocation={currentLocation}
              weatherData={weatherData}
            />
            <ForecastCard forecastData={forecastData} />
          </>
        )}
      </AppWrapper>
    );
  }
}

export default Home;
