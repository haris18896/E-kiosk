import * as React from 'react';
import tw from 'twrnc';
import {Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

import {
  Input,
  InputContainer,
  VenueSelect,
} from '../../components/screen.components/venue.components';
import {SafeAreaWithImage} from '../../components/utility';
import {colors} from '../../infrastructures/theme/colors';
import {ButtonClick, ButtonContainer} from '../../components/Button';
import {VenueStyles} from './venue.stylesheet';

const Venue = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const countries = ['Ethera-Irvine', 'Ethera', 'Issac'];

  return (
    <SafeAreaWithImage>
      <VenueSelect>Please Login</VenueSelect>

      <InputContainer>
        <Icon
          name="person"
          size={15}
          color={colors.ui.secondary}
          style={tw`p-2 border-r-2 rounded-l-lg`}
        />
        <Input
          label="Email"
          value={email}
          onChange={e => setEmail(e)}
          placeholder="Enter your email"
        />
      </InputContainer>
      <InputContainer>
        <Icon
          name="lock-closed"
          size={15}
          color={colors.ui.secondary}
          style={tw`p-2 border-r-2 rounded-l-lg`}
        />
        <Input
          label="Password"
          value={password}
          secureTextEntry
          onChange={e => setPassword(e)}
          placeholder="Password"
        />
      </InputContainer>

      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultValue={countries[0]}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownIconPosition="right"
        buttonTextStyle={VenueStyles.buttonTextStyles}
        buttonStyle={VenueStyles.buttonStyle}
        renderDropdownIcon={() => (
          <Icon
            name="caret-down-outline"
            size={15}
            color={colors.ui.secondary}
          />
        )}
        dropdownStyle={VenueStyles.dropdownStyle}
        dropdownOverlayColor={VenueStyles.dropdownOverlayColor}
        dropdownBackgroundColor={VenueStyles.dropdownBackgroundColor}
        rowStyle={VenueStyles.rowStyle}
        rowTextStyle={VenueStyles.rowTextStyle}
        selectedRowStyle={VenueStyles.selectedRowStyle}
      />

      <Pressable onPress={() => navigation.navigate('Main')}>
        <ButtonContainer>
          <ButtonClick>Login</ButtonClick>
        </ButtonContainer>
      </Pressable>
    </SafeAreaWithImage>
  );
};

export default Venue;
