import React from 'react';
import {SafeAreaWithImage} from '../../components/utility';
import {
  CheckInHeading,
  Date,
  ProviderContainer,
  ProviderImage,
  ProviderLicense,
  ProviderName,
  ProviderText,
  styles,
  ThankyouHeading,
  Time,
  TimeView,
} from '../../components/screen.components/check-in.components';
import {Pressable} from 'react-native';
import {ButtonClick, ButtonContainer} from '../../components/Button';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../infrastructures/theme/colors';

const Thankyou = ({navigation}) => {
  return (
    <SafeAreaWithImage>
      <CheckInHeading variant="title">Appointment Check-In</CheckInHeading>
      <Date>Tuesday, Aug 2, 2022</Date>

      <ThankyouHeading variant="title">
        Thank you for checking in
      </ThankyouHeading>
      <Date>
        Please make yourself comfortable and your provider will be out to greet
        you shortly
      </Date>

      <ProviderContainer style={styles.boxShadow}>
        <ProviderImage
          size={30}
          source={require('../../assets/images/provider.jpeg')}
        />
        <ProviderText>
          <ProviderName>Dr. Courtney Shen DeShelter, PsyD</ProviderName>
          <ProviderLicense>License #PSY31253</ProviderLicense>
        </ProviderText>
      </ProviderContainer>

      <TimeView>
        <Icon name="timer-outline" color={colors.text.white} />
        <Time>Check-in at 3:07PM</Time>
      </TimeView>

      <Pressable onPress={() => navigation.navigate('Venue')}>
        <ButtonContainer>
          <ButtonClick>Close</ButtonClick>
        </ButtonContainer>
      </Pressable>
    </SafeAreaWithImage>
  );
};

export default Thankyou;
