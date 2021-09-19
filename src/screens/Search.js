import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, ScrollView, Linking} from 'react-native';
import styles from "../assets/styles";
import { useDispatch, useSelector } from "react-redux";
import {getUsersRepoRequest} from '../store/services/thunks'

const Search = () => {

    const [searchInput, setSearchInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    let repoList = useSelector(state => state.repoReducer.repoList)

    const handleChange = text => {
        setSearchInput(text);
    }

    const handleSearch = () => {
        repoList = [];
        setErrorMessage('No Search Results');
        if(searchInput.length > 0){
            dispatch(getUsersRepoRequest(searchInput))
        }else{
            setErrorMessage('Please enter the username to search');
        }
    }
    
    return(
        <View>
            <Text style={styles.sectionTitle}>Github Repo search</Text>
            <View style={styles.flexDirectionRow}>
                <TextInput
                    style={styles.input}
                    onChangeText= {handleChange}
                    value= {searchInput}
                    autoCapitalize = "none"
                    placeholder= 'Find user repository list....'
                />
                <TouchableOpacity
                    style = {styles.searchBtn}
                    onPress = {handleSearch}>
                    <Text> Search </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />
            <ScrollView>
                {repoList && repoList.length > 0 && repoList.map(item => {
                    return(
                        <View style={styles.repoList} key={item.id}>
                            <Text style={styles.repoLink} onPress={() => Linking.openURL(item.html_url)}>{item.name}</Text>
                            <Text style={styles.repoDesc}>{item.description}</Text>
                        </View>
                    );
                })}
                {repoList && repoList.length == 0 && 
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                }
            </ScrollView>
        </View>
    )
}


export default Search;