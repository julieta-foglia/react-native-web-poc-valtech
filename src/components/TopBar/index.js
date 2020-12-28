import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Image,
  LogoWrapper,
  ListWrapper,
  Option,
  Subtitle,
  CitiesList,
} from "./styled";
import { TouchableOpacity } from "react-native";
import ImgIcon from "../../assets/sun.png";
import CITIES_DATA from "../../helpers/citiesData";

const TopBar = ({ changeLocation }) => {
  const [dropdownVisible, setDropDownVisible] = useState(false);

  const renderItem = ({ item }) => (
    <ListWrapper>
      <Option
        onPress={() => {
          changeLocation({ city: item.city, country: item.country });
          setDropDownVisible(!dropdownVisible);
        }}
      >
        {item.city}
      </Option>
    </ListWrapper>
  );

  return (
    <Wrapper>
      <LogoWrapper>
        <Image source={ImgIcon} />
        <Title>ForecastApp</Title>
      </LogoWrapper>
      <TouchableOpacity onPress={() => setDropDownVisible(!dropdownVisible)}>
        <Subtitle>Cambiar Ciudad</Subtitle>
      </TouchableOpacity>
      {dropdownVisible && (
        <CitiesList
          data={CITIES_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.city}
        />
      )}
    </Wrapper>
  );
};

export default TopBar;
