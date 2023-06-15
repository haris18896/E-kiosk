import {Pressable, Text, View} from 'react-native';
import styled from 'styled-components';

export const ButtonContainer = styled(View)`
  margin-top: ${props => props.theme.space[5]};
  width: 70%;
  padding-top: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[7]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[7]};
  background-color: ${props => props.theme.colors.brand.primary};
  border-radius: ${props => props.theme.sizes[0]};
`;

export const ButtonClick = styled(Text)`
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.fontSizes.body};
`;
