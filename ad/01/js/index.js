var click_cs = 0;

$(document).ready(function () {

    var timeout;

    var temp_arr = window.location.pathname.split("/");

    var aspx_file_name = temp_arr[temp_arr.length - 1];

    var flag = false;//已访问

    if (navigator.userAgent.indexOf("baiduboxapp") >= 0 || navigator.userAgent.indexOf("baidubrowser") >= 0)
    {
        if (navigator.userAgent.match(/mobile/i)) {
            //移动端

            $(".can_copy").bind('touchstart click', function () {

                if (!flag) {
                    flag = true;
                    setTimeout(function () { flag = false; }, 100);

                    if (click_cs > 0) {
                        return;
                    }

                    //微信号索引
                    var weixinindex = "";
                    if (this.hasAttribute("order")) {
                        weixinindex = $(this).attr("order");
                    }

                    //微信号
                    var weixinhao = $("#Hid_weixinhao").val();
                    //页面地址
                    var url = window.location.href;
                    //来路地址
                    var previous_Url = document.referrer;
                    
                    timeout = setTimeout(function () {

                        $.get(aspx_file_name,
                        {
                            weixinhao: weixinhao,
                            url: url,
                            previous_Url: previous_Url,
                            weixinindex: weixinindex
                        }, function (data) {
                            click_cs++;
                        });

                    }, 1000);
                }

                return true;
            });
        }
        else {
            $(".can_copy").mousedown(function () {


                if (!flag) {
                    flag = true;
                    setTimeout(function () { flag = false; }, 100);

                    if (click_cs > 0) {
                        return;
                    }

                    //微信号索引
                    var weixinindex = "";
                    if (this.hasAttribute("order")) {
                        weixinindex = $(this).attr("order");
                    }

                    //微信号
                    var weixinhao = $("#Hid_weixinhao").val();
                    //页面地址
                    var url = window.location.href;
                    //来路地址
                    var previous_Url = document.referrer;
                    
                    timeout = setTimeout(function () {

                        $.get(aspx_file_name,
                        {
                            weixinhao: weixinhao,
                            url: url,
                            previous_Url: previous_Url,
                            weixinindex: weixinindex
                        }, function (data) {
                            click_cs++;
                        });

                    }, 1000);
                }

                return true;
            });
        }

        if (navigator.userAgent.match(/mobile/i)) {
            //移动端

            $(".can_copy").on("touchend", function (event) {
                event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
                clearTimeout(timeout);
            });
        }
        else {
            $(".can_copy").mouseup(function () {
                clearTimeout(timeout);
            });
        }
    }
    else
    {
        $(".can_copy").bind('copy', function () {

            if (!flag) {
                flag = true;

                //微信号索引
                var weixinindex = "";
                if (this.hasAttribute("order")) {
                    weixinindex = $(this).attr("order");
                }

                //微信号
                var weixinhao = $("#Hid_weixinhao").val();
                //页面地址
                var url = window.location.href;
                //来路地址
                var previous_Url = document.referrer;

                $.get(aspx_file_name,
                    {
                        weixinhao: weixinhao,
                        url: url,
                        previous_Url: previous_Url,
                        weixinindex: weixinindex
                    }, function (data) { }
                 );
            }
        });
    }
});