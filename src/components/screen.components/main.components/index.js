import styled from 'styled-components';
import {Text, View} from 'react-native';

export const WelcomeEthera = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.sizes[1]};
`;

export const Date = styled(Text)`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.sizes[3]};
`;

export const TapContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.bg.secondary};
  padding: ${props => props.theme.space[5]};
  border-radius: ${props => props.theme.sizes[0]};
  margin-bottom: ${props => props.theme.sizes[2]};
`;

export const ButtonTextContainer = styled(View)`
  flex-direction: column;
  margin-left: ${props => props.theme.sizes[0]};
`;

export const ButtonText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.h5};
  font-weight: 600;
  color: ${props => props.theme.colors.text.white};
`;
