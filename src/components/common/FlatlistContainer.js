import { FlatList } from 'react-native'
import React from 'react'

const FlatlistContainer = ({ data, renderItem, ListEmptyComponent, ...rest }) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={ListEmptyComponent}
            {...rest}
        />
    )
}

export default FlatlistContainer