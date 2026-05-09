import "@/global.css"
import { Text, View } from "react-native";
import React from 'react';
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";


const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-sucess">
                Welcome to Nativewind!
            </Text>
            <Link href= "/onboarding" className="mt-4 rounded bg-primary text-black p-4">GO TO Onboarding</Link>
            <Link href= "/(auth)/sign-in" className="mt-4 rounded bg-primary text-black p-4">GO TO Sign In</Link>
            <Link href= "/(auth)/sign-up" className="mt-4 rounded bg-primary text-black p-4">GO TO Sign Up</Link>

            <Link href="/app/subscriptions/spotify">Spotify Subscription</Link>
            <Link 
                href={{
                    pathname: "/subscription/[id]",
                    params: {id: "claude"},
                }}
                >
                Claude Max Subscription
            </Link>





        </SafeAreaView>
    );
}