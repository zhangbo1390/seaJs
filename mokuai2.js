/**
 * Created by XbZhang on 2017/8/31.
 */
define(function(require,exports,module){
    function fn(dom,color){
        $(dom).css('color',color);
        console.log(dom);
    }
    module.exports = fn;
});