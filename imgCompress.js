/**
 * @imgCompress
 * @author Tyrone Yves Chen
 * @version 1.0
 * @description 图片压缩小工具
 * @disclaimer 我只是代码的搬运工，借鉴于网上各位大佬的代码修改后在项目中使用，如有雷同，纯属巧合
 * @PS：汤圆萌萌哒~
 * 感谢jzz大佬和小杰果果大佬的代码给我提供了思路
 * jzz大佬GitHub地址：https://github.com/jzz2649
 * Param ：
 * options = {
    };
 */


        (function (window) {
            var ImgCompress = function (element, options) {
                if (!this.validateElement(element)) return;
                this.optionsHandle(options);
                this._this = this;
                this.init(element);
            };

            var imgCompress = ImgCompress.prototype;

            imgCompress.init = function (element) {
                    this.eventChange(element);
            };

            imgCompress.defaults = {
                isCompress: false,
                sizeConstrained: 10240,
                scale: 0.6,
                onSize: 500,
                w_scale: 640,
                callback: function () {}
            };

            imgCompress.eventChange = function (element) {
                element.onchange = function (e) {
                    console.log(e);
                    var files = element.files[0];
                    console.log(files);
                }
            };

            imgCompress.optionsHandle = function (options) {
                var params = {},
                    options = options || {},
                    defaults = this.defaults;
                console.log(options);
                for (var key in defaults) {
                    params[key] = defaults[key];
                }

                if (typeof options === 'function') {
                    params.callback = options;
                } else {
                    for (var o in options) {
                        if (options.hasOwnProperty(o)) {
                            params[o] = options[o];
                        }
                    }
                }
                this.params = params;
            };

            imgCompress.imgCompressHandle = function () {

            };

            imgCompress.validateFileReader = function (files) {
                if (FileReader) {
                    var reader = new FileReader();
                    reader.readAsDataURL(files);
                    reader.onload = function(e) {
                        var base64 = e.target.result;
                        handle(base64)
                    };
                } else {
                    ObjectURL = URL.createObjectURL(file);
                    handle(ObjectURL);
                }
            };

            imgCompress.validateElement = function (element) {
                var boolean = true;
                try {
                    if (element === undefined || element === null) {
                        boolean = false;
                        throw new Error("element is not found");
                    }
                    if (typeof element !== 'object') {
                        boolean = false;
                        throw new Error("element is not dom");
                    }
                }
                catch (err){
                    console.log(err);
                }
                return boolean;
            };

            window.ImgCompress = ImgCompress;
        })(window);
