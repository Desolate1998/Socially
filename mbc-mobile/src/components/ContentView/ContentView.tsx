// InfiniteScroll.js

import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View,Image,StyleSheet, Dimensions } from 'react-native';
import Header from '../Header/Header';
import { Button } from 'react-native-paper';
import data from './data.json'

export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}
interface ProductProps {
    product: Product;
}
const ProductComponent: React.FC<ProductProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>Price: ${product.price}</Text>
                <Text style={styles.discount}>Discount: {product.discountPercentage}%</Text>
                <Text style={styles.rating}>Rating: {product.rating}/5</Text>
                <Text style={styles.stock}>In Stock: {product.stock}</Text>
                <Text style={styles.brand}>Brand: {product.brand}</Text>
                <Text style={styles.category}>Category: {product.category}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
       
    },
    thumbnail: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        marginBottom: 5,
    },
    discount: {
        fontSize: 14,
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        marginBottom: 5,
    },
    stock: {
        fontSize: 14,
        marginBottom: 5,
    },
    brand: {
        fontSize: 14,
        marginBottom: 5,
    },
    category: {
        fontSize: 14,
    },
});


const ContentView:React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageData, setpageData] = useState<Product[]>([])
    useEffect(() => {
        let d = data.products as Product[]
   
        setpageData([...d])    
    }, [page]);
    const screenHeight = Dimensions.get('window').height
    
    return (
        <ScrollView  style={{ flex: 1,zIndex:0,height: screenHeight }} >
            {pageData.map((item)=>{
                return <ProductComponent product={item}/>            
                })}
        </ScrollView >
    );
};



export default ContentView;
