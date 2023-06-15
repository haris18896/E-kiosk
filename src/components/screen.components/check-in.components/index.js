import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '../../../infrastructures/theme/colors';

export const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonIndex: {
    zIndex: -3,
  },
});

export const CheckInHeading = styled(Text)`
    margin-top: ${props => props.theme.space[3]}
    margin-bottom: ${props => props.theme.space[3]}
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: ${props => props.theme.fontWeights.medium};
`;

export const ThankyouHeading = styled(Text)`
    margin-top: ${props => props.theme.space[3]}
    margin-bottom: ${props => props.theme.space[1]}
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: ${props => props.theme.fontWeights.medium};
`;

export const Date = styled(Text)`
  font-size: ${props => props.theme.fontSizes.button};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.space[3]};
  text-align: center;
  margin-left: ${props => props.theme.space[3]};
  margin-right: ${props => props.theme.space[3]};
`;

export const ProviderContainer = styled(View)`
  margin-left: ${props => props.theme.space[2]};
  margin-right: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[2]};
  max-width: 90%;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.bg.white};
  padding: ${props => props.theme.space[1]};
  border-radius: ${props => props.theme.sizes[1]};
`;

export const ProviderText = styled(View)`
  flex-direction: column;
  padding-left: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[3]};
`;

export const ProviderImage = styled(Image)`
  width: ${props => props.theme.sizes[3]};
  height: ${props => props.theme.sizes[3]};
  border-radius: ${props => props.theme.sizes[1]};
  margin-right: ${props => props.theme.space[1]};
`;

export const ProviderName = styled(Text)`
  margin-bottom: ${props => props.theme.space[2]};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.black};
`;

export const ProviderLicense = styled(Text)`
  margin-bottom: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.label};
  color: ${props => props.theme.colors.text.gray};
`;

export const InitialsText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.button};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-top: ${props => props.theme.space[4]};
  margin-bottom: ${props => props.theme.space[2]};
  z-index: -3;
`;

export const InitialsInput = styled(TextInput)`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.4);
  border-radius: ${props => props.theme.sizes[0]};
  width: 30%;
  background-color: ${props => props.theme.colors.bg.white};
  height: 40px;
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.body};
  z-index: -3;
`;

// search

// thankyou
export const TimeView = styled(View)`
  flex-direction: row;
  background-color: ${props => props.theme.colors.ui.secondary};
  margin-top: ${props => props.theme.space[2]}
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
  padding-left: ${props => props.theme.space[7]};
  padding-right: ${props => props.theme.space[7]};
  border-radius: ${props => props.theme.sizes[1]};
`;

export const Time = styled(Text)`
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.fontSizes.caption};
  margin-left: ${props => props.theme.space[3]};
`;

export const SearchBox = styled(View)`
  position: relative;
  width: 90%;
  align-items: center;
`;

export const SearchContainer = styled(View)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.bg.white};
  width: 70%;
  margin-left: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
  margin-right: ${props => props.theme.space[2]};
  margin-bottom: 0;
`;

export const SearchInput = styled(TextInput)`
  width: 80%;
  height: 40px;
  margin-left: 8px;
  background-color: ${props => props.theme.colors.bg.white};
  border-radius: 20px;
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const ListContainer = styled(View)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  // border-top-width: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex: 1;
  width: 70%;
  z-index: 5;
  elevation: 5;
  position: absolute;
  background-color: ${props => props.theme.colors.bg.white};
  padding: ${props => props.theme.space[2]};
  max-height: 160px;
  top: 50px;
`;

export const List = styled(ScrollView)`
  padding: ${props => props.theme.space[1]};
`;

export const Item = styled(Text)`
  padding-left: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
  text-transform: capitalize;
`;

export const Loader = styled(ActivityIndicator).attrs({
  color: colors.text.primary,
  size: 'small',
})`
  margin-top: 50px;
`;
