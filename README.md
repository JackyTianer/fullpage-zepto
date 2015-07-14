# fullpage-zepto
fullpage.js in mobile 
你可以使用这个项目创建基于手机web端的fullpage,他依赖于zepto，和zepto的插件touch.js

### 使用方法

* 引入zepto.js,touch.s
* 引入fullpage.require.js
* 引入fullpage.zepto.css
* $(selector).scrollScreen(opt);
* 
```html
<div class='content'>
    <div class='viewframe'>page1<div/> 
    <div class='viewframe'>page2<div/> 
    <div class='viewframe'>page3<div/> 
    <div/> 
</html>
```
* 根据设计 将每个页面放入class为viewframe的div中
```javascript
require(['zepto', '../scripts/scroll.js'], function($) {
    'use strict';
    $(document).ready(function() {
        $('.content').scrollScreen({
            'screenCotent': $('.viewframe')
        });
    });
});
```
