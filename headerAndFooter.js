function createHeader() {
    return `
        <header id="header-section" class="container-fluid no-padding"> 
            <div class="row main-header">

                <div class="col-md-3 logo-section">
                    <img class="logo-image" src="./images/77.png"/>
                </div>

                <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12 header-menu-options">
                    <div class="topnav" id="myTopnav">
                        <div class="header-list">
                            <a href="/">Home</a>
                            <a href="./services.html">Services</a>
                            <a href="./products.html">Products</a>
                            <a href="./news.html">News</a>
                            <a href="./info.html">Info</a>
                            <a href="./contact.html">Contact</a>
                            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const headerPageSection = createHeader();

const header = document.querySelector('#header');
header.innerHTML = headerPageSection;


function createFooter() {
    return `
        <footer>
            <div id="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
                    <p class="footer-description">Copyright@ArthurMolnar 2017</p>
                </div>
            </row>
        </footer>
            `
}

const footerPageSection = createFooter();
const footer = document.querySelector('#footer');

footer.innerHTML = footerPageSection;