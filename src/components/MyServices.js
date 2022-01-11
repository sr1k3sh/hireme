import React from "react"
import Header from "./Header"
import ServiceRow from "./ServiceRow"
import service1 from './../images/service1.svg';
import service2 from './../images/service2.svg';
import service3 from './../images/service3.svg';

export default function MyServices(){

    return(
        <React.Fragment>
            <section className="myservices container-xl">
                <div className="rikesh__column col-xl-10">
                    <Header title='Ways I can help you'></Header>
                    <ServiceRow src={service1} title="1. Own a Website that Works" desc="You want a website. It must look great and you want it to work... All the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll grow your business. Promise."></ServiceRow>
                    <ServiceRow alternate={true} src={service2} title="2. Become Famous with SEO" desc="An impressive Google ranking means more people see your fantastic blog post or revolutionary product. I ensure you have a leading ranking with best SEO practices. Give your content the audience it deserves!"></ServiceRow>
                    <ServiceRow src={service3} title="2. Sell Your Stuff Online" desc="You have an idea. You want to turn it into an online business without all the hassle. Perfect! I'm here to help you set up an e-commerce store that looks amazing and makes you money."></ServiceRow>
                </div>
            </section>
        </React.Fragment>
    )
}