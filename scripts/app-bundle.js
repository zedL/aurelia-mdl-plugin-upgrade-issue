define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment', 'material-design-lite'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.plugin('aurelia-mdl-plugin');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot('mdl-issue/sample-one'); });
    }
    exports.configure = configure;
});



define("routes", [],function(){});

define('mdl-issue/layout',["require", "exports"], function (require, exports) {
    "use strict";
    var Layout = (function () {
        function Layout() {
        }
        return Layout;
    }());
    exports.Layout = Layout;
});

define('mdl-issue/sample-one',["require", "exports"], function (require, exports) {
    "use strict";
    var SampleOne = (function () {
        function SampleOne() {
        }
        return SampleOne;
    }());
    exports.SampleOne = SampleOne;
});

define('mdl-issue/sample-two',["require", "exports"], function (require, exports) {
    "use strict";
    var SampleTwo = (function () {
        function SampleTwo() {
        }
        return SampleTwo;
    }());
    exports.SampleTwo = SampleTwo;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>\n"; });
define('text!mdl-issue/layout.html', ['module'], function(module) { module.exports = "<template>\n  <!-- Uses a header that contracts as the page scrolls down. -->\n  <style>\n    .demo-layout-waterfall .mdl-layout__header-row .mdl-navigation__link:last-of-type {\n      padding-right: 0;\n    }\n  </style>\n\n  <div class=\"demo-layout-waterfall mdl-layout mdl-js-layout\">\n    <header class=\"mdl-layout__header mdl-layout__header--waterfall\">\n      <!-- Top row, always visible -->\n      <div class=\"mdl-layout__header-row\">\n        <!-- Title -->\n        <span class=\"mdl-layout-title\">Title</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\n                  mdl-textfield--floating-label mdl-textfield--align-right\">\n          <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"waterfall-exp\">\n          <i class=\"material-icons\">search</i>\n        </label>\n          <div class=\"mdl-textfield__expandable-holder\">\n            <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\" id=\"waterfall-exp\">\n          </div>\n        </div>\n      </div>\n      <!-- Bottom row, not visible on scroll -->\n      <div class=\"mdl-layout__header-row\">\n        <div class=\"mdl-layout-spacer\"></div>\n        <!-- Navigation -->\n        <nav class=\"mdl-navigation\">\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        </nav>\n      </div>\n    </header>\n    <div class=\"mdl-layout__drawer\">\n      <span class=\"mdl-layout-title\">Title</span>\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n      </nav>\n    </div>\n    <main class=\"mdl-layout__content\">\n      <div class=\"page-content\">\n        <!-- Your content goes here -->\n        <slot name=\"content\"></slot>\n        <footer class=\"mdl-mini-footer\">\n          <div class=\"mdl-mini-footer__left-section\">\n            <div class=\"my-footer-menue\">\n              <!-- Left aligned menu on top of button  -->\n              <button id=\"demo-menu-top-left\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n\n              <ul class=\"mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect\" data-mdl-for=\"demo-menu-top-left\">\n                <li class=\"mdl-menu__item\">Some Action</li>\n                <li class=\"mdl-menu__item\">Another Action</li>\n                <li disabled class=\"mdl-menu__item\">Disabled Action</li>\n                <li class=\"mdl-menu__item\">Yet Another Action</li>\n              </ul>\n            </div>\n          </div>\n        </footer>\n      </div>\n\n    </main>\n  </div>\n\n</template>\n"; });
define('text!mdl-issue/layout.css', ['module'], function(module) { module.exports = "/* mdl fonts*/\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(/fonts/MaterialIcons-Regular.eot);\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(/fonts/MaterialIcons-Regular.woff2) format(\"woff2\"), url(/fonts/MaterialIcons-Regular.woff) format(\"woff\"), url(/fonts/MaterialIcons-Regular.ttf) format(\"truetype\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n  font-feature-settings: 'liga'; }\n"; });
define('text!mdl-issue/sample-one.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"material-design-lite/material.indigo-pink.min.css\"></require>\n  <require from=\"./layout\"></require>\n  <require from=\"./layout.css\"></require>\n  <layout>\n    <div slot=\"content\">\n\n      <form action=\"#\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell\">\n            <!-- Numeric Textfield with Floating Label -->\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n              <input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" id=\"sample4\">\n              <label class=\"mdl-textfield__label\" for=\"sample4\">Number...</label>\n              <span class=\"mdl-textfield__error\">Input is not a number!</span>\n            </div>\n          </div>\n\n          <div class=\"mdl-cell\">\n            <!-- Accent-colored raised button with ripple -->\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\">\n              Button\n            </button>\n          </div>\n\n          <div class=\"mdl-cell\">\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n            <p>hello world</p>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </layout>\n</template>\n"; });
define('text!mdl-issue/sample-two.html', ['module'], function(module) { module.exports = "<template>\ntwo\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map