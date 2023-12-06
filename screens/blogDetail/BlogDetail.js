import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native"; // Import Image component for displaying avatars
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePost,
  getBlogDetails,
  likePost,
} from "../../redux/actions/blogAction";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import { format } from "date-fns";

export default function BlogDetail() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params;
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogDetail);

  const { loading, error, postLike, success } = useSelector(
    (state) => state.likePost
  );

  const { dislikeSuccess } = useSelector((state) => state.dislikePost);

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  const handleLikeClick = () => {
    dispatch(likePost(blog.id));
  };

  const handleDislikePost = () => {
    dispatch(dislikePost(blog.id));
  };

  useEffect(() => {
    if (success) {
      dispatch(getBlogDetails(id));
    }

    if (dislikeSuccess) {
      dispatch(getBlogDetails(id));
    }
  }, [success, dislikeSuccess, dispatch, id]);

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Detail Blog</Text>
      </View>

      {blog ? (
        <ScrollView className="px-3 bg-white py-5 ">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-2">
              <Image
                className="w-[50px] h-[50px]"
                source={{ uri: blog.avatar }}
              />
              <View>
                <Text className="text-[18px] font-bold"> {blog.userName}</Text>
                <Text className="text-[13px]">{blog?.datePosted}</Text>
                {/* <Text>{format(new Date(blog?.datePosted), "dd-MM-yyyy")}</Text> */}
              </View>
            </View>
            <View className="flex flex-row items-center gap-3">
              <TouchableOpacity
                onPress={handleLikeClick}
                activeOpacity={0.7}
                className="flex flex-row items-center gap-1"
              >
                <AntDesign name="like2" size={20} color="gray" />
                <Text>{blog.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleDislikePost}
                className="flex flex-row items-center gap-1"
              >
                <AntDesign name="dislike2" size={20} color="gray" />
                <Text>{blog.dislikes}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="py-5">Title: {blog.title}</Text>

          <HTML source={{ html: blog.content }} />
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
