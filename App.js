import React,{useState} from 'react'
import {SafeAreaView,StyleSheet, FlatList,TouchableOpacity,View,Text} from 'react-native'
import {ItemPost} from '_components'
import {Mixins} from '_utils'

const App = () => {
  const [dataPost,setDataPost] = useState([
    {like:0,image:'https://www.sgs.ca/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg'},
    {like:0,image:'https://posterstore.eu/images/zoom/8-15155.jpg'},
    {like:0,image:'https://scx1.b-cdn.net/csz/news/800/2018/europeslostf.jpg'}
  ])

  const ACTION_HEADERS = val => {
    const data = [...dataPost]
    data.forEach(el => {
      if((val === -1 && el.like > 0) || val === 1){
        el.like = el.like + val
      }else if(val === 0){
        el.like = 0
      }
    })
    setDataPost(data)
  }
  const ACTION_ITEM = (i,val) => {
    const data = [...dataPost]
    if((val === -1 && data[i].like> 0) || val === 1){
      data[i].like = data[i].like + val
      setDataPost(data)
    }
  }
  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={{padding:Mixins.scaleSize(25)}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>ACTION_HEADERS(1)} style={[styles.buttonHeader,styles.buttonLike]}>
              <Text style={styles.textButtonHeader}>Like All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>ACTION_HEADERS(0)} style={[styles.buttonHeader,styles.buttonReset]}>
              <Text style={[styles.textButtonHeader,styles.textColorResetButton]}>Reset All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>ACTION_HEADERS(-1)} style={[styles.buttonHeader,styles.buttonDislike]}>
              <Text style={styles.textButtonHeader}>Dislike All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{marginBottom:Mixins.scaleSize(25)}}
            numColumns={1}
            data={dataPost}
            renderItem={(item)=><ItemPost AddAction={ACTION_ITEM} {...item}/>}
            keyExtractor={(item,key)=>item+key}
            showsVerticalScrollIndicator={false}
          />
        </View>
        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    flex:1,
    backgroundColor:'#f4f4f4'
  },
  header : {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:Mixins.scaleSize(15)
  },
  textButtonHeader : {
    fontSize : Mixins.scaleFont(16),
    paddingVertical:Mixins.scaleSize(5),
    paddingHorizontal:Mixins.scaleSize(17),
    color:'#ffffff'
  },
  textColorResetButton : {color:'#888888'},
  buttonHeader : {
    borderRadius:Mixins.scaleSize(5),
    ...Mixins.boxShadow('#dddddd')
  },
  buttonDislike : {backgroundColor:'#db2d2c',borderColor:'#db2d2c',borderWidth:1},
  buttonLike : {backgroundColor:'#2c72c4',borderColor:'#2c72c4',borderWidth:1},
  buttonReset : {backgroundColor:'#ffffff',borderColor:'#ececec',borderWidth:1}
});

export default App
