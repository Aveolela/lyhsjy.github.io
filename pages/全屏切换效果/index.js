// 闭包的作用

// 避免全局依赖
// 避免第三方破坏
// 兼容jQuery操作符'$'和jQuery

// 开发方式
// （1）类级别组件开发
// 即给jquery命名空间下添加新的全局函数，也称为静态方法。
// jQuery.myPlugin = function() {}

// (2)对象级别组件开发
// 即挂载在jquery原型下的方法，这样通过选择器获取的jquery对象实例也能共享该方法，也称为动态方法。
// $.fn.myPlugin = function() {}
// 这里$.fn === $.prototype


var sections = document.getElementsByClassName('sections')[0]
        var dotArr = document.getElementsByClassName('dot')
        var count = 0
        var timer = null
        window.onload = function () {
            transY(count)
            timer = setInterval(changePage, 3000)
        }
        window.onwheel = function (e) {
            var k = e.wheelDelta / 120
            if (k < 0) {
                count += 1
                if (count >= sections.children.length - 1) {
                    count = 3
                    transY(count)
                } else {
                    transY(count)
                }
            } else {
                count -= 1
                if (count <= 0) {
                    count = 0
                    transY(count)
                } else {
                    transY(count)
                }
            }
        }
        function changePage() {
            count += 1
            if (count >= sections.children.length - 1) {
                count = 3
                transY(count)
                count = -1
            } else {
                transY(count)
            }
        }
        function transY(count) {
            sections.style = `transform: translateY(-${count * 100}%); transition: all 1s;`
            Array.from(dotArr).map((item, index) => {
                item.classList.remove('dot_active')
                if (index === count) {
                    dotArr[count].classList.add('dot_active')
                }
            })
        }