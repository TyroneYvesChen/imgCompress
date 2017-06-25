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
                try {
                    if (element === undefined || element === null) {
                        throw new Error("dom is undefined");
                        return;
                    }

                }
                catch (err){
                    console.log(err);
                }
                this.options = options;
                this._this = this;
                this.init(element);
            };

            var imgCompress = ImgCompress.prototype;

            imgCompress.init = function (element) {
                this.eventChange(element);
            };

            imgCompress.eventChange = function (element) {
                element.onchange = function (e) {
                    console.log(e);
                }
            };

            window.ImgCompress = ImgCompress;
        })(window);
