import React from "react";
import {NavLink} from "react-router-dom"
import web1 from "../src/images/Website2.png"
import Common from "./Common";
const About = () => {
  return <>
   <Common name="Welcome to about page" imgsrc={web1} visit="/contact" btnName="Contact Now" /> 
  </>
}
export default About;