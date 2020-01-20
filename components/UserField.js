import React,{Component} from "react";
import { View, Text, TextInput, TouchableOpacity, Button} from "react-native";

export default class UserField extends Component {
  render() {
    let buttons = this.props.pressers;
    let fields = this.props.inputs;
    return (
      <View style ={{flex:1}}>
        {
          
          fields.map((field) => {
            return (
              <View key={field.title}>
            <Text>{field.title} </Text>
                <TextInput placeholder={field.text} autoCompleteType={field.secured ? "password" : "email"} value={field.value} onChangeText={field.onChange} />
              </View>
            )
          })
        }
        {
          buttons.map((button) => {
            return (
              <View key={button.text} >
                <TouchableOpacity key={button.text} to={button.link}>
                  <Button disabled={button.disabled} onPress={() => button.reaction && button.reaction()} title={button.text}/>
                </TouchableOpacity>
              </View>
            )
          })

        }
      </View>
    );
  }
}