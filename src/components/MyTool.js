import React, { useEffect, useRef } from "react";
import ToolCard from "./ToolCard";
import html from './../images/html.svg';
import Header from "./Header";
import css from './../images/css.svg';
import javascript from './../images/js.svg';
import react from './../images/react.svg';
import angular from './../images/angular.svg';
import vue from './../images/vue.svg';
import sass from './../images/sass.svg';
import mongodb from './../images/mongodb.svg';
import mysql from './../images/mysql.svg';
import node from './../images/node.svg';
import firebaseIcon from './../images/firebase.svg';
import express from './../images/express.svg';
import figma from './../images/figma-1.svg';
import xd from './../images/xd.svg';
import zeplin from './../images/zeplin.svg';
import git from './../images/git.svg';
import github from './../images/github.svg';
import jira from './../images/jira.svg';
import bitbucket from './../images/bitbucket.svg';
import netlify from './../images/netlify.svg';
import heroku from './../images/heroku.svg';
import vscode from './../images/vscode.svg';
import { iteraction } from "../utils";
export default function MyTool(){

    const mytoolRef1 = useRef(),
        mytoolRef2 = useRef(),
        mytoolRef3 = useRef(),
        mytoolRef4 = useRef();

    useEffect(()=>{
        iteraction(mytoolRef1.current);
        iteraction(mytoolRef2.current);
        iteraction(mytoolRef3.current);
        iteraction(mytoolRef4.current);
    },[]);

    return(
        <React.Fragment>
            <section className="container-xl">
                <div className="rikesh__column">
                    <Header title="My ToolBox"></Header>
                    <div ref={mytoolRef1} className="mytool-section">
                        <h3 className="rikesh__h3">Frontend</h3>
                        <div className="rikesh__row">
                            <ToolCard src={html} title="HTML"></ToolCard>
                            <ToolCard src={css} title="CSS"></ToolCard>
                            <ToolCard src={javascript} title="Javascript"></ToolCard>
                            <ToolCard src={sass} title="Sass"></ToolCard>
                            <ToolCard src={react} title="React"></ToolCard>
                            <ToolCard src={angular} title="Angular"></ToolCard>
                            <ToolCard src={vue} title="Vue"></ToolCard>
                        </div>
                    </div>
                    <div ref={mytoolRef2} className="mytool-section">
                        <h3 className="rikesh__h3">Backend</h3>
                        <div className="rikesh__row">
                            <ToolCard src={mongodb} title="Mongodb"></ToolCard>
                            <ToolCard src={mysql} title="Mysql"></ToolCard>
                            <ToolCard src={firebaseIcon} title="Firebase"></ToolCard>
                            <ToolCard src={node} title="Nodejs"></ToolCard>
                            <ToolCard src={express} title="Express"></ToolCard>
                        </div>
                    </div>
                    <div ref={mytoolRef3} className="mytool-section">
                        <h3 className="rikesh__h3">Design tool</h3>
                        <div className="rikesh__row">
                            <ToolCard src={figma} title="Figma"></ToolCard>
                            <ToolCard src={xd} title="Adobe Xd"></ToolCard>
                            <ToolCard src={zeplin} title="Zeplin"></ToolCard>
                        </div>
                    </div>
                    <div ref={mytoolRef4} className="mytool-section">
                        <h3 className="rikesh__h3">Other tools</h3>
                        <div className="rikesh__row">
                            <ToolCard src={git} title="Git"></ToolCard>
                            <ToolCard src={github} title="Github"></ToolCard>
                            <ToolCard src={bitbucket} title="Bitbucket"></ToolCard>
                            <ToolCard src={jira} title="Jira"></ToolCard>
                            <ToolCard src={netlify} title="Netlify"></ToolCard>
                            <ToolCard src={heroku} title="Heroku"></ToolCard>
                            <ToolCard src={vscode} title="vsCode"></ToolCard>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}