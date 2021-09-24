import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";

import GithubProfile from "./containers/GithubProfile";


import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

ReactDOM.render(
	<>
		<Navigation />
		<Greetings />
		<Skills />
		<Proficiency />
		<Education />
		<GithubProfile />
	</>,
	document.getElementById("root")
);
