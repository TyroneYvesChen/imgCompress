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
                this.init(element);
            };

            var imgCompress = ImgCompress.prototype;
            //初始化
            imgCompress.init = function (element) {
                    this.eventChange(element);
            };
            //默认参数
            imgCompress.defaults = {
                isCompress: false,
                sizeConstrained: 10240,
                scale: 0.6,
                onSize: 500,
                w_scale: 640,
                callbackFn: function () {}
            };
            //input的chang事件
            imgCompress.eventChange = function (element) {
                var _this = this,
                    params = _this.params;
                element.onchange = function (e) {
                    console.log(e);
                    var files = e.currentTarget.files[0];              //传入文件详情
                    var filename = e.currentTarget.files[0].name;		//文件名
                    var byteSize = e.currentTarget.files[0].size;		//文件大小
                    var lastname = filename.substring(filename.lastIndexOf(".") + 1, filename.length);
                    console.log(files);
                    console.log(element.files[0]);
                    if (params.isCompress){
                        _this.imgCompressHandle(files);
                    }else {
                        _this.validateFileReader(files);
                        params.callbackFn();
                    }
                }
            };

            //图片压缩
            imgCompress.imgCompressHandle = function (files, callback) {
                var size = file.size;
                var params = this.params;
                var type = params.type || file.type;
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var ObjectURL = null;
                var img = new Image();
                img.src = base64;
                img.onload = function () {
                    var width = img.width;
                    var height = img.height;

                    if (width > params.w_scale) {
                        canvas.width = params.w_scale;
                        canvas.height = height * params.w_scale / width;
                    } else {
                        canvas.width = width;
                        canvas.height = height;
                    }

                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    var dataURL;
                    if (size > params.onSize * 1024) {
                        dataURL = canvas.toDataURL(type, params.scale);
                    } else {
                        dataURL = canvas.toDataURL(type);
                    }

                    callback(dataURL);
                    img = null;
                    ObjectURL && URL.revokeObjectURL(ObjectURL);
                };
            };

            //FileReader判断,获取base64
            imgCompress.validateFileReader = function (files) {
                var _this = this,
                    ObjectURL = null,
                    base64 = "";
                if (FileReader) {
                    var reader = new FileReader();
                    reader.readAsDataURL(files);
                    reader.onload = function(e) {
                        base64 = e.target.result;
                        _this.imgCompressHandle(base64)
                    };
                } else {
                    ObjectURL = URL.createObjectURL(file);
                    _this.imgCompressHandle(ObjectURL);
                }
                return base64;
            };

            //dom判断
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

            //参数处理
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

            window.ImgCompress = ImgCompress;
        })(window);
