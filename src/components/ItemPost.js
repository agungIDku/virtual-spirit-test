import React,{memo} from 'react'
import {View,StyleSheet,Image,TouchableOpacity,Text} from 'react-native'
import {Mixins} from '_utils'
const ItemPost = ({item,index,AddAction}) => {
    return(
        <View style={styles.wrapper}>
            <Image style={styles.image} source={{uri:item.image}}/>
            <View style={styles.wrapActions}>
                <View style={styles.wrapLikes}>
                    <Text style={styles.textLikes}>{item.like} Like</Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>AddAction(index,1)} style={[styles.button,styles.buttonLike,{marginRight:Mixins.scaleSize(5)}]}>
                        <Text style={[styles.textButton]}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>AddAction(index,-1)} style={[styles.button,styles.buttonDislike]}>
                        <Text style={[styles.textButton]}>Dislike</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper : {
      marginBottom:Mixins.scaleSize(15),
    },
    image:{
        width:'100%',
        height:200,
        borderTopLeftRadius:Mixins.scaleSize(8),
        borderTopRightRadius:Mixins.scaleSize(8),
    },
    wrapActions : {
        flexDirection:'row',
        justifyContent:'space-between',
        borderLeftWidth:1.5,
        borderRightWidth:1.5,
        borderBottomWidth:1.5,
        borderColor:'#d8d8d8',
        borderBottomLeftRadius:Mixins.scaleSize(8),
        borderBottomRightRadius:Mixins.scaleSize(8),
        paddingVertical:Mixins.scaleSize(10),
        paddingHorizontal:Mixins.scaleSize(15)
    },
    textButton : {
        fontSize : Mixins.scaleFont(16),
        paddingVertical:Mixins.scaleSize(4),
        paddingHorizontal:Mixins.scaleSize(15),
        color:'#ffffff'
    },
    textLikes: {
        color:'#888888',
        backgroundColor:'#ffffff',
        fontSize : Mixins.scaleFont(16),
        paddingVertical:Mixins.scaleSize(4),
        paddingHorizontal:Mixins.scaleSize(15),
    },
    wrapLikes :{
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:Mixins.scaleSize(5),
        overflow:'hidden',
        ...Mixins.boxShadow('#dddddd'),
    },
    button : {
        borderRadius:Mixins.scaleSize(5),
        ...Mixins.boxShadow('#dddddd')
    },
    buttonDislike : {backgroundColor:'#db2d2c',borderColor:'#db2d2c',borderWidth:1},
    buttonLike : {backgroundColor:'#2c72c4',borderColor:'#2c72c4',borderWidth:1}
  });
export default memo(ItemPost)