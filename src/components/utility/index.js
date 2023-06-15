import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import {Avatar} from 'react-native-paper';
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  width: 100%;
`;

export const Main = styled(View)`
  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled(View)`
  margin-top: ${props => props.theme.space[2]}
  padding-bottom: ${props => props.theme.sizes[1]};
`;

export const SafeAreaWithImage = ({children}) => {
  return (
    <>
      <SafeArea>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Main>
            <Logo>
              <Avatar.Image
                size={150}
                source={require('../../assets/images/etheraLogo.png')}
              />
            </Logo>
            {children}
          </Main>
        </ScrollView>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
