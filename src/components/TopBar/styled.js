import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  background-color: papayawhip;
  border: solid 2px #fdd18a;
  flex-direction: row;
  padding: 15px 22px 22px;
  position: relative;
  z-index: 1;
`;

export const LogoWrapper = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const ListWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1rem;
`;

export const Subtitle = styled.Text`
  font-size: 1rem;
`;

export const Option = styled.Text`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

export const CitiesList = styled.FlatList`
  width: 8.5rem;
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  border-radius: 5px;
  border: solid 2px #fdd18a;
`;

export const Separator = styled.View`
  height: 5px;
  background-color: black;
`;
