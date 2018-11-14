"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var Login = (function(_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        username: "",
        password: ""
      }),
      (_this.handleChange = function(event) {
        var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value; //Destructure the current fields name and value

        _this.setState(_defineProperty({}, name, value));
        // alert(this.setState({ [name]: value }));  //Sets state
      }),
      (_this.handleSubmit = function(event) {
        event.preventDefault();
        //Alter your  request like below
        $.ajax({
          method: "post",
          url: "https://nodedeveloper.azurewebsites.net/users/login",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            username: _this.state.username,
            password: _this.state.password
          }
        }).then(function(res) {
          console.log(res);
          console.log(res.data);
        });
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(Login, [
    {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-sm-10 col-md-10 col-md-offset-1" },
              React.createElement(
                "div",
                { className: "account-wall" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-md-6" },
                    React.createElement("br", null),
                    React.createElement(
                      "div",
                      { className: "col-md-10 col-md-offset-3" },
                      React.createElement("img", {
                        src: "images/logo.png",
                        width: "70%",
                        className: "center"
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "col-md-10 col-md-offset-2" },
                      React.createElement("br", null),
                      React.createElement("img", {
                        src: "images/layer.png",
                        width: "100%",
                        className: "center"
                      }),
                      React.createElement("br", null),
                      " ",
                      React.createElement("br", null),
                      "  ",
                      React.createElement("br", null)
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-md-6 vl" },
                    React.createElement(
                      "form",
                      { className: "form-signin", onSubmit: this.handleSubmit },
                      React.createElement(
                        "label",
                        null,
                        React.createElement("b", null, "Username")
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Username",
                        id: "username",
                        name: "username",
                        autoFocus: true,
                        onChange: this.handleChange
                      }),
                      React.createElement("br", null),
                      React.createElement(
                        "label",
                        null,
                        React.createElement("b", null, "Password")
                      ),
                      React.createElement("input", {
                        type: "password",
                        className: "form-control",
                        id: "password",
                        name: "password",
                        placeholder: "Password",
                        onChange: this.handleChange,
                        required: true
                      }),
                      React.createElement(
                        "label",
                        { className: "checkbox pull-left" },
                        React.createElement("input", {
                          type: "checkbox",
                          defaultValue: "remember-me"
                        }),
                        "Remember me"
                      ),
                      React.createElement(
                        "a",
                        { href: "#", className: "pull-right need-help" },
                        "Forget Password? "
                      ),
                      React.createElement("span", { className: "clearfix" }),
                      React.createElement(
                        "button",
                        {
                          className:
                            "btn btn-lg btn-primary btn-block  center-block",
                          align: "center",
                          type: "submit"
                        },
                        "Login"
                      )
                    ),
                    React.createElement("br", null),
                    React.createElement(
                      "a",
                      { href: "#", className: "text-right new-account" },
                      "Sign Up "
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
  ]);

  return Login;
})(React.Component);

ReactDOM.render(
  React.createElement(Login, null),
  document.getElementById("root")
);
