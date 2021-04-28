function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var logo = "<svg id=\"logo\" viewBox='0 0 321.73228 297.6378'>\n  <polygon\n    fill={props.color}\n    points=\"153.866 137.304 29.328 137.304 29.328 111.262 95.478 65.834 30.717 65.834 30.717 35.656 153.358 35.656 153.358 61.739 85.278 107.126 153.866 107.126 153.866 137.304\"\n  />\n  <polygon\n    fill={props.color}\n    points=\"290.604 137.304 166.067 137.304 166.067 111.262 232.219 65.834 165.739 65.834 165.739 35.656 290.097 35.656 290.097 61.739 222.017 107.126 290.604 107.126 290.604 137.304\"\n  />\n  <path\n    fill={props.color}\n    d=\"M261.52932,208.42344a23.24677,23.24677,0,0,1-23.304,23.302h-19.765c-5.674,0-12.744-2.692-19.077-8.098l-17.495-16.606,17.495-16.605c6.333-5.407,13.403-8.099,19.077-8.099h19.765a23.247,23.247,0,0,1,23.304,23.303Zm-140.978,15.204c-6.334,5.406-13.404,8.098-19.078,8.098H81.7083a23.24674,23.24674,0,0,1-23.304-23.302v-2.803a23.247,23.247,0,0,1,23.304-23.303h19.765c5.674,0,12.744,2.692,19.078,8.099l17.494,16.605Zm171.853-18.357a53.09045,53.09045,0,0,0-53.498-53.206h-19.903c-17.083,0-27.843,2.468-40.003,15.149l-19.033,19.276-19.034-19.276c-12.16-12.681-22.92-15.149-40.002-15.149h-19.903a53.09062,53.09062,0,0,0-53.499,53.206v3.502a53.09083,53.09083,0,0,0,53.499,53.207h19.903c17.082,0,27.842-2.468,40.002-15.15l19.034-19.274,19.033,19.274c12.16,12.682,22.92,15.15,40.003,15.15h19.903a53.09066,53.09066,0,0,0,53.498-53.207Z\"\n  />\n</svg>";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":host {\n  border: 1px solid gray;\n  padding: 10px;\n  width: 200px;\n}\n\nsvg {\n  fill: lightgray;\n}\n\nbutton {\n  border: none;\n  border-radius: 10px;\n  background-color: #9d27b4;\n  color: white;\n  padding: 10px;\n  cursor: pointer;\n  display: block;\n  width: 100%;\n}\n.style_rotate__2Wqno {\n  -webkit-animation:style_spin__39rcL 300ms;\n          animation:style_spin__39rcL 300ms;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes style_spin__39rcL {\n    0 { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes style_spin__39rcL {\n    0 {transform:rotate(0deg);}\n    100% {transform:rotate(360deg);}\n}";
var styleSheet = {"rotate":"style_rotate__2Wqno","spin":"style_spin__39rcL"};
styleInject(css_248z);

var getRandomColor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

var template = document.createElement("template");
template.innerHTML =
/*html*/
"\n  ".concat(logo, "\n  <button id=\"btn\">Change color</button>\n ");

var BuzzLogo = /*#__PURE__*/function (_HTMLElement) {
  _inherits(BuzzLogo, _HTMLElement);

  var _super = _createSuper(BuzzLogo);

  function BuzzLogo() {
    var _this;

    _classCallCheck(this, BuzzLogo);

    _this = _super.call(this);
    _this.color = 'lightgray';

    _this.attachShadow({
      mode: "open"
    });

    _this.shadowRoot.adoptedStyleSheets = [styleSheet];
    return _this;
  }

  _createClass(BuzzLogo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.shadowRoot.getElementById("btn").onclick = function () {
        return _this2.changeColor();
      };

      this.update();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom square element attributes changed.');
    }
  }, {
    key: "changeColor",
    value: function changeColor() {
      this.color = getRandomColor();
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      this.shadowRoot.getElementById("logo").classList.add('rotate');
      this.shadowRoot.getElementById("logo").style.fill = this.color;
      setTimeout(function () {
        _this3.shadowRoot.getElementById("logo").classList.remove('rotate');
      }, 600);
    }
  }]);

  return BuzzLogo;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("buzz-logo", BuzzLogo);
