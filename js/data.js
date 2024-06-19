var clicktype = true;
function indexFun() {
    $(".load_bg").remove();
    $(".page_index .lottery_box").on("click", ".list_but", function() {
        if (clicktype == false) {
            return false
        }
        clicktype = false;
        zpjp = 2;
        zpfun(function() {
            setTimeout(function() {
                speed = 60;
                zpnum = 0;
                count = 0;
                zpjp = -1;
                clicktype = true;
                alert("恭喜您获得1314元")
            }, 600)
        })
    })
}
var speed = 60;
var zpnum = 0;
var count = 0;
var totalCount = 6;
var zpjp = -1;
function zpfun(a) {
    zpnum++;
    if (count > totalCount && zpnum == zpjp) {
        a();
        setTimeout(function() {
            $(".lottery_box .list_box").attr("class", "list_box")
        }, 800)
    } else {
        if (zpnum > 7) {
            zpnum = 0;
            count++
        }
        if (count >= totalCount) {
            speed += 30
        }
        setTimeout(function() {
            zpfun(a)
        }, speed)
    }
    $(".lottery_box .list_box").attr("class", "list_box list_box" + zpnum)
}
