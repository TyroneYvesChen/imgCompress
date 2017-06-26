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
                this.validateElement(element);
                this.options = options;
                this._this = this;
                this.init(element);
            };

            var imgCompress = ImgCompress.prototype;

            imgCompress.init = function (element) {
                this.eventChange(element);
            };

            imgCompress.validateElement = function (element) {
                try {
                    if (element === undefined || element === null) {
                        throw new Error("element is not found");
                    }
                    if (typeof element !== 'object') {
                        throw new Error("element is not dom");
                    }
                }
                catch (err){
                    console.log(err);
                }
            };

            imgCompress.validateFileReader = function () {
                if (FileReader) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(e) {
                        var base64 = e.target.result;
                        handle(base64)
                    };
                } else {
                    ObjectURL = URL.createObjectURL(file);
                    handle(ObjectURL);
                }
            };

            imgCompress.eventChange = function (element) {
                element.onchange = function (e) {
                    console.log(e);
                    var files = element.files[0];
                    console.log(files);
                }
            };

            window.ImgCompress = ImgCompress;
        })(window);
