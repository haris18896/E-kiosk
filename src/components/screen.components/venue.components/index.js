import {Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '../../../infrastructures/theme/colors';

// export const Logo = styled(View)`
//   padding-bottom: ${props => props.theme.space[1]};
//   padding-bottom: ${props => props.theme.sizes[2]};
// `;

export const VenueSelect = styled(Text)`
  margin-top: ${props => props.theme.space[3]}
  margin-bottom: ${props => props.theme.space[3]}
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const InputContainer = styled(View)`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: ${props => props.theme.sizes[0]}
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.bg.white};
  width: 80%;
  margin: ${props => props.theme.space[2]};
`;

export const Input = styled(TextInput)`
  border-left-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.2);
  width: 85%;
  background-color: ${props => props.theme.colors.bg.white};
  height: ${props => props.theme.sizes[2]};
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Login = styled(Button).attrs({
  color: colors.text.secondary,
})`
  margin-top: ${props => props.theme.space[3]};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: ${props => props.theme.fontSizes.button};
  background-color: ${props => props.theme.colors.brand.primary};
  padding-left: ${props => props.theme.sizes[3]};
  padding-right: ${props => props.theme.sizes[3]};
  border-radius: ${props => props.theme.sizes[0]};
  margin-bottom: ${props => props.theme.sizes[2]};
`;
