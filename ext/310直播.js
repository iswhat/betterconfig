
{
    //规则名
    "title": "310直播",
    //作者
    "author": "li5bo5",
    //请求头UA,不填则默认okhttp/3.12.11，可填MOBILE_UA或PC_UA使用内置的手机版或电脑版UA
    //习惯查看手机源码写建议用手机版UA，习惯查看PC版源码写建议用电脑版UA
    "UserAgent":"Mozilla/5.0 (Linux; Android 12; V2049A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36",
    //请求头Referer参数，如果只是播放页需要，填WebView即可引用播放页的链接作嗅探Referer参数。
    //一般很少用，留空或删除
    //是否开启获取首页数据，0关闭，1开启
    "homeContent":"0",
    //分类链接起始页码,禁止负数和含小数点。
    "firstpage": "1",
    //分类链接,{cateId}是分类，{catePg}是页码,第一页没有页码的可以这样写 第二页链接[firstPage=第一页的链接]
    "class_url": "http://www.310.tv/{cateId}",
    //分类名，分类1&分类2&分类3
    "class_name": "310直播",
    //分类名替换词，替换词1&替换词2&替换词3，替换词包含英文&的用两个中文＆＆代替，示例：＆＆id=0&＆＆id=1
    "class_value": "",
    //筛选数据，json格式，参考xpath的筛选写法
    "filterdata":{},
    //分类是否二次截取
    "cat_YN_twice": "1",
    //分类二次截取前
    "cat_twice_pre": "<div class=\"list_content",
    //分类二次截取后
    "cat_twice_suf": "<div class=\"indexbtn",
    
    //分类数组截取前
    "cat_arr_pre": "<a class = \"clearfix",
    //分类数组截取后
    "cat_arr_suf": "</a>",
    //分类截取片单图片，截取前缀&&截取后缀
    "cat_pic": "img src=\"&&\"",
    //分类截取片单标题，截取前缀&&截取后缀
    "cat_title": "zhudui_wuyd\">&&</section",
    //分类截取片单副标题，截取前缀&&截取后缀
    "cat_subtitle": "eventtime\">&&</p",
    //分类截取片单链接，截取前缀&&截取后缀
    "cat_url": "href=\"&&\"",  
    //分类片单链接补前缀  
    "cat_prefix": "",
    //分类片单链接补后缀
    "cat_suffix": "",
    "force_play": "1",
    //是否开启手动嗅探，只对网页嗅探有效，0否，1是
    "ManualSniffer":"1",
    //手动嗅探视频链接关键字，每个用#隔开
    "VideoFormat":"",
    //手动嗅探视频链接过滤关键词,每个用#隔开
    "VideoFilter":".html#=http"
}