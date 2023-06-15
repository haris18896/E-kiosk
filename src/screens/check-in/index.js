import React, {useState} from 'react';
import {Pressable} from 'react-native';

import {
  CheckInHeading,
  Date,
  InitialsInput,
  InitialsText,
  ProviderContainer,
  ProviderImage,
  ProviderLicense,
  ProviderName,
  ProviderText,
  styles,
} from '../../components/screen.components/check-in.components';

import {SafeAreaWithImage} from '../../components/utility';
import {ButtonClick, ButtonContainer} from '../../components/Button';

import Search from '../../components/search';

const CheckIn = ({navigation}) => {
  const [initials, setInitials] = useState('AA');
  return (
    <SafeAreaWithImage>
      {/* Heading */}
      <CheckInHeading variant="title">Appointment Check-In</CheckInHeading>
      <Date>Tuesday, Aug 2, 2022</Date>
      {/* Provider box */}
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
      {/* Search Provider */}
      <Search />
      {/* Initials */}
      <InitialsText>Please input your first and last initials</InitialsText>
      <InitialsInput
        textAlign={'center'}
        value={initials}
        onChange={e => setInitials(e)}
      />
      {/* Submit */}
      <Pressable
        style={styles.buttonIndex}
        onPress={() => navigation.navigate('Thankyou')}>
        <ButtonContainer>
          <ButtonClick>Submit</ButtonClick>
        </ButtonContainer>
      </Pressable>
    </SafeAreaWithImage>
  );
};

export default CheckIn;
