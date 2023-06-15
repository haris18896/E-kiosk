import {StyleSheet} from 'react-native';

export const VenueStyles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,.4)',
    borderWidth: 1,
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
  },
  buttonTextStyles: {
    color: `${props => props.theme.colors.text.black}`,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    backgroundColor: `${props => props.theme.colors.bg.white}`,
  },
  dropdownOverlayColor: {
    backgroundColor: 'transparent',
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
  },
  dropdownBackgroundColor: {
    backgroundColor: '#fff',
  },
  rowStyle: {
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    height: 30,
  },
  rowTextStyle: {
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 14,
  },
  selectedRowStyle: {
    backgroundColor: '#f89a40',
    color: '#fff',
  },
});
