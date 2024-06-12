import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { horizontalScale, verticalScale } from '../../../assets/scaling';

const BackButton = ({
        onPress = () => {}
    }) => {
        return (
            <Pressable onPress={() => onPress()} style={styles.container}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Pressable>
        );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        width: horizontalScale(44),
        height: horizontalScale(44),
        borderRadius: horizontalScale(26),
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default BackButton;