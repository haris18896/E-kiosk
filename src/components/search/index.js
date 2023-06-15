import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructures/theme/colors';
import {
  ListContainer,
  Item,
  Loader,
  SearchBox,
  SearchContainer,
  SearchInput,
  List,
} from '../screen.components/check-in.components';

import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [masterData, setMasterData] = useState([]);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://aboutreact.herokuapp.com/demosearchables.php')
      .then(response => response.json())
      .then(responseJson => {
        setMasterData(responseJson.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const data = masterData.filter(({name}) =>
    name.toString().toLowerCase().includes(search.toString().toLowerCase()),
  );

  console.log('searched item : ', search);

  return (
    <SearchBox>
      <SearchContainer
        style={search && open ? styles.halfBorder : styles.fullBorder}>
        <SearchInput
          onChangeText={e => {
            setSearch(e);
            setOpen(true);
          }}
          value={search}
          placeholder="Provider Name"
          underlineColorAndroid="transparent"
        />
        <Icon
          name="caret-down-outline"
          size={15}
          color={colors.ui.secondary}
          style={tw`p-3 rounded-l-lg`}
        />
      </SearchContainer>
      {search && open && (
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <List>
              {data.length ? (
                data.map((item, index) => (
                  <Item
                    key={index}
                    onPress={() => {
                      setSearch(item.name);
                      setOpen(false);
                    }}>
                    {item.name}
                  </Item>
                ))
              ) : (
                <Item
                  onPress={() => {
                    setSearch('');
                    setOpen(false);
                  }}>
                  No Data Found{' '}
                </Item>
              )}
            </List>
          )}
        </ListContainer>
      )}
    </SearchBox>
  );
};

export default Search;

export const styles = StyleSheet.create({
  halfBorder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fullBorder: {
    borderRadius: 20,
  },
});
