import * as React from 'react';

import {
  TapContainer,
  Date,
  WelcomeEthera,
  ButtonTextContainer,
  ButtonText,
} from '../../components/screen.components/main.components';
import {SafeAreaWithImage} from '../../components/utility';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../infrastructures/theme/colors';
import {Pressable} from 'react-native';

const Main = ({navigation}) => {
  // const date = new Date().toISOString();
  return (
    <SafeAreaWithImage>
      <WelcomeEthera>Welcome to Ethera</WelcomeEthera>
      <Date>Tuesday, August 2, 2022</Date>
      <Pressable onPress={() => navigation.navigate('CheckIn')}>
        <TapContainer>
          <Icon name="log-in-outline" size={40} color={colors.text.white} />
          <ButtonTextContainer>
            <ButtonText>Tap to</ButtonText>
            <ButtonText>Check-In</ButtonText>
          </ButtonTextContainer>
        </TapContainer>
      </Pressable>
    </SafeAreaWithImage>
  );
};

export default Main;
