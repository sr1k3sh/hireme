import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GetEmail from "../components/GetEmail";
import Myprojects from "../components/Myprojects";
import MyServices from "../components/MyServices";
import MyTool from "../components/MyTool";
import PersonalContainer from "../components/PersonalContainer";

export default function Home(){
    return(
        <React.Fragment>
            <Banner></Banner>
            <PersonalContainer></PersonalContainer>
            <MyServices></MyServices>
            <Myprojects></Myprojects>
            <MyTool></MyTool>
            <GetEmail></GetEmail>
            <Footer></Footer>
        </React.Fragment>
    )
}