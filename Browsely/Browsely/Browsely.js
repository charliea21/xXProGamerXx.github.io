// Browsely © xXProGamerXx \\

console.log("Browsely v1.0.0 has loaded");

// wait function

function wait(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function pauseExecution(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var $;

// Browser Detection \\

// ;Note: check browser first or MS Edge can get awaywith loading the webpage

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

// BNS \\

// ; Edge is not supported

// Edge doesn't understand "catch" :-)

if (isEdge) {
  window.location.href = "bns.html";
}


// require.js

(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'Browsely/require.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            //window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });
})();

// jQuery

(function() {
  if (window.jQuery) {return;}
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'Browsely/jquery.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var _$ = window.jQuery;
        $ = _$;
        window.jQuery("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: "Browsely/Browsely.css"
        }).appendTo("head");
        new BrowselyCore(_$);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

// core

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowselyCore = function BrowselyCore(jQuery) {
  _classCallCheck(this, BrowselyCore);

  // do everything here
  var _Browsely = function _Browsely() {};
  var _Browselyfn = _Browsely;
  _Browselyfn.math = function () {};

  _Browselyfn.getConsole = function () {
    return console;
  };

  _Browselyfn.sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  };

  _Browselyfn.wait = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  };

  _Browselyfn.consoleClear = function () {
    console.clear();
  };

  _Browselyfn.math.add = function (num1, num2) {
    return num1 + num2;
  };

  _Browselyfn.http = function () {};

  _Browselyfn.http.ajax = function (args) {
    jQuery.ajax(args);
  };

  if (!window.B$) {
    window.B$ = _Browsely;
  }

  if (!window.Browsely) {
    window.Browsely = _Browsely;
  }
};
