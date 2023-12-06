import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as Icon from "react-native-feather";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import ButtonBack from "../../components/button/ButtonBack";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import { format } from "date-fns";
import UploadImageProfile from "../manageAccount/UploadImageProfile";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/signupActions";
import ModalConfirm from "../../components/modal/ModalConfirm";
import { SIGNUP_RESET } from "../../redux/constants/signupConstants";

const data = [
  { label: "MALE", value: "MALE" },
  { label: "FEMALE", value: "FEMALE" },
  { label: "OTHER", value: "OTHER" },
];

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(
    require("../../assets/images/avatar.png")
  );
  const [avatarSubmit, setAvatarSubmit] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const { success } = useSelector((state) => state.signup);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const onFocus = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const handleChangeImage = (value) => {
    setAvatar(Object.assign({}, value));
    setAvatarSubmit(Object.assign({}, value));
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      const data = {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
        dob: format(new Date(date), "yyyy-MM-dd"),
        phone: phone,
        gender: gender,
        role: {
          roleId: 4,
        },
      };

      dispatch(signUp(data));
    }
  };

  useEffect(() => {
    if (success) {
      setModalVisible(true);
      dispatch({ type: SIGNUP_RESET });
    }
  }, [success, dispatch]);

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          {/* Button back */}
          <ButtonBack navigation={navigation} />

          {/* Title */}
          <View className="justify-center items-center flex w-full py-3">
            <Text className="text-3xl font-bold justify-center">Sign Up</Text>
            <Text className="text-3xl font-black justify-center mt-5">
              Complete your account!
            </Text>
            <Text className="text-lg font-normal">
              "Explore the world with us!"
            </Text>
          </View>

          {/* Input */}
          <View>
            <View className="flex flex-col justify-center items-center w-auto">
              {avatarSubmit ? (
                <Image
                  className="w-16 h-16 rounded-full"
                  source={{ uri: avatarSubmit["0"]["uri"] }}
                />
              ) : (
                <Image className="w-16 h-16 rounded-full" source={avatar} />
              )}

              <UploadImageProfile handleChangeImage={handleChangeImage} />
            </View>
            <Input
              label={"Full Name"}
              placeholder={"Enter your full name"}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <Input
              label={"Username"}
              placeholder={"Enter your username"}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              label={"Email"}
              type={"email-address"}
              placeholder={"Enter your email"}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              label={"Password"}
              placeholder={"Enter your password"}
              secure={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Input
              label={"Confirm Password"}
              placeholder={"Enter your confirm password"}
              secure={true}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <Input
              label={"Date of birth"}
              value={format(new Date(date), "dd/MM/yyyy")}
              onFocus={() => onFocus("date")}
              keyboardAppearance={false}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}

            <Input
              label={"Phone Number"}
              placeholder={"Enter your phone number"}
              type={"numeric"}
            />

            <View>
              <Text className="font-medium text-base mx-4 my-2 text-black">
                Gender
              </Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={210}
                labelField="label"
                valueField="value"
                placeholder="Select gender"
                searchPlaceholder="Search..."
                value={gender}
                onChange={(item) => {
                  setGender(item.value);
                }}
                renderItem={renderItem}
              />
            </View>
          </View>

          {/* Button */}
          <View>
            <Button text={"Sign Up"} onPress={handleSubmit} />
          </View>

          <View className="flex-row justify-center pb-3">
            <Text className="text-lg font-bold">Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate("SignInScreen")}
              className="text-lg font-bold text-[#2196F3]"
            >
              Login
            </Text>
          </View>
        </ScrollView>

        <ModalConfirm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
