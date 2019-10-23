"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpeedTest = function () {
    function SpeedTest() {
        _classCallCheck(this, SpeedTest);

        this.testWrapper = document.querySelector(".test-wrapper");
        this.testArea = document.querySelector("#test-area");
        this.originText = document.querySelector("#origin-text p").innerHTML;
        this.resetButton = document.querySelector("#reset");
        this.theTimer = document.querySelector(".timer");

        this.minute = 0;
        this.second = 0;
        this.hundredths = 0;

        this.startTime = null;
    }

    _createClass(SpeedTest, [{
        key: "init",
        value: function init() {
            var _this = this;

            // Click button Start over
            this.resetButton.addEventListener("click", function () {
                _this.reset();
            });

            // Typing text
            this.testArea.addEventListener("input", function () {
                if (!_this.startTime) {
                    _this.startTime = setInterval(function () {
                        _this.start();
                    }, 10);
                }
                _this.testWrapper.style.border = "10px solid red";

                if (_this.checkText(_this.testArea.value)) {
                    _this.testWrapper.style.border = "10px solid green";
                    clearInterval(_this.startTime);
                }
            });
        }
    }, {
        key: "start",
        value: function start() {
            if (this.hundredths === 99) {
                this.second++;
                this.hundredths = 0;
            }
            if (this.second === 59) {
                this.minute++;
                this.second = 0;
            }
            this.hundredths++;

            this.theTimer.innerHTML = this.addLeadingZero("" + this.minute) + ":" + this.addLeadingZero("" + this.second) + ":" + this.addLeadingZero("" + this.hundredths);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.minute = 0;
            this.second = 0;
            this.hundredths = 0;

            this.theTimer.innerHTML = this.addLeadingZero("" + this.minute) + ":" + this.addLeadingZero("" + this.second) + ":" + this.addLeadingZero("" + this.hundredths);

            clearInterval(this.startTime);
            this.startTime = null;

            this.testArea.value = "";
            this.testWrapper.style.border = "10px solid grey";
        }
    }, {
        key: "addLeadingZero",
        value: function addLeadingZero(number) {
            var string = number.toString();
            var length = string.length;
            if (length === 1) {
                string = "0" + string;
            }
            return string;
        }
    }, {
        key: "checkText",
        value: function checkText(text) {
            if (text === this.originText) {
                return true;
            }
            return false;
        }
    }]);

    return SpeedTest;
}();

var test = new SpeedTest();
test.init();