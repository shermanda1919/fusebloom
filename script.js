/* MOBILE FIRST!!! */

html {
  scroll-behavior: smooth;
}

nav {
  font-family: 'Poppins', sans-serif;
  position: sticky;
  border: 0;
}

.nav-link {
  margin-top: 0em;
  margin-left: 1.5em;
  font-size: 1.2em;
}

@media screen and (min-width: 768px) {
  .nav-link {
    margin-top: 1.0em;
    margin-left: 1.5em;
    font-size: 1.2em;
  }
}

/* Goal: Change the anchor links to color of black, the active or hovering anchor links to color of grey, and erase the black rectangle around active links */

.navbar-light .nav-item.active .nav-link,
.navbar-light .nav-item .nav-link:active,
.navbar-light .nav-item .nav-link:focus,
.navbar-light .nav-item:hover .nav-link {
  color: black;
}

.navbar-light .nav-item .nav-link:focus {
  background-color: white;
}

.icon-bar {
  background-color:#000000 !important;
  border: 0;
}

.navbar-light {
  background-color: white !important; 
  border: none !important;
  border-width:0!important;
}

.logo {
  margin-left: 25px;
  width: 80px;
  height: 80px;
}

/* li {
  margin-top: 15px;
  margin-left: 20px;
} */

.home h1 {
  padding-top: 20px;
  line-height: 1.2;
  font-family: 'Lora', serif;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #25C0F8;
}

/* Kudos to Mister Jojo on Stack Overflow for helping on this great animation! */
.slide {
  text-align : center;
  transform  : translateX(-100vw);
  animation  : 2s slideIn forwards;
  }  

.second {
  margin-top      : -0.6em;
  animation-delay : 2s;
  } 

@keyframes slideIn {
  0%   { transform : translateX(-100vw); }
  100% { transform : translateX(0);      }
  }

.home h2 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 12px;
  font-size: 1.5em;
  color: black;
}

img {
  display: block; /* always starts on a new line and takes up the full width */
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
}

.home .arrow {
  margin-top: 0px;
  margin-bottom: 0px;
  width: 0px;
  height: 0px;
  visibility: hidden;
}

.bounce {
	-moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
	animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@media screen and (min-width: 990px) {
  .home .arrow {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 40px;
    height: 40px;
    visibility: visible;
  }
}

@media screen and (min-width: 700px) {
  .home img { 
    width: 500px;
    height: 500px;
  }
}

.mission h1 {
  font-family: 'Lora', serif;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #2F2E41;
  padding-bottom: 30px;
}

.mission h2 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: left;
  font-size: 1.3em;
  color: black;
}

col-lg-6 {
  width: 50%;
  height: 200px;
}

@media screen and (min-width: 1200px) {
  col-lg-6 {
    width: auto;
    height: auto;
  }

  .mission .row {
    padding-top: 30px;
  }

  .mission h2 {
    padding-top: 20px;
    padding-right: 200px;
  }
}

.statistics {
  padding-top: 30px;
  padding-bottom: 30px;
}

.statistics h1 {
  letter-spacing: 1.0px;
  font-family: 'Lora', serif;
  font-weight: 500;
  text-align: center;
  font-size: 5em;
  color: #39CEAF;
}

.statistics h2 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5em;
  color: black;
}

.reviews h1 {
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #FC9639;
  margin-top: 50px;
  margin-bottom: 50px;
}

.rectangle1 {
  background: #FFEAD7;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 44px;
  /*
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-bottom: 20px;
  height: 490px;
  width: 350px;
  */
}

.rectangle2 {
  background: #FFEAD7;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  /*
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-bottom: 20px;
  height: 490px;
  width: 350px;
  */
}


.reviews h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  text-align: center;
  padding-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.7em;
  color: black;
}

.reviews h3 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: left;
  padding-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2em;
  color: black;
}

.reviews h3 .right {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: right;
  padding-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.2em;
  color: black;
}

.trusted h1 {
  padding-top: 70px;
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #2F2E41;
}

.trusted .left {
  width: 300px;
  height: 50px;
  margin-top: 45px;
}

.trusted .right {
  width: 240px;
  height: 120px;
  margin-top: 30px;
}

.process h1 {
  padding-top: 80px;
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #39CEAF;
}

.process h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.7em;
  color: black;
}

.process h3 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;
  padding-top: 10px;
  font-size: 1.2em;
  color: black;
}

.process2 h1 {
  padding-top: 80px;
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #25C0F8;
}

.process2 h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.7em;
  color: black;
}

.process2 h3 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;
  padding-top: 10px;
  font-size: 1.2em;
  color: black;
}

.end h1 {
  padding-top: 50px;
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  font-size: 2.5em;
  color: #2F2E41;
}

.end h2 {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 300;
  text-align: left;
  font-size: 1.3em;
  color: black;
}

@media screen and (min-width: 1200px) {
  .end .row {
    padding-top: 30px;
  }

  .end h2 {
    padding-top: 20px;
    padding-right: 250px;
  }
}

.copyright {
  padding-top: 50px;
  padding-bottom: 10px;
  font-family: 'Lora', serif;
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
  font-size: 1.0em;
  color: black;
}

.end .social-media-row {
  display: flex;
  margin-bottom: 30px;
}

.end .column {
  flex: 33.3%;
  padding: 5px;
}

.end .social-media-row img {
  width: 20px;
  height: 20px;
}
