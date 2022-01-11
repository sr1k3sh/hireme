import React from "react";
import ToolCard from "./ToolCard";
import html from './../images/html.svg';
import Header from "./Header";
import css from './../images/css.svg';
import javascript from './../images/js.svg';
import react from './../images/react.svg';
import angular from './../images/angular.svg';
import vue from './../images/vue.svg';
import sass from './../images/sass.svg';
export default function MyTool(){
    return(
        <React.Fragment>
            <section className="container-xl">
                <div className="rikesh__column">
                    <Header title="My ToolBox"></Header>

                    <h3 className="rikesh__h3">Frontend</h3>

                    <div className="rikesh__row">
                        <ToolCard src={html} title="HTML"></ToolCard>
                        <ToolCard src={sass} title="Sass"></ToolCard>
                        <ToolCard src={css} title="CSS"></ToolCard>
                        <ToolCard src={javascript} title="Javascript"></ToolCard>
                        <ToolCard src={react} title="React"></ToolCard>
                        <ToolCard src={angular} title="Angular"></ToolCard>
                        <ToolCard src={vue} title="Vue"></ToolCard>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}