pageOperateType = false;



var clipboard = new ClipboardJS('.btnCopy', {

  target: function() {

    return document.querySelector('#textCode');

  }

});



clipboard.on('success', function(e) {

  console.log(e);

});



clipboard.on('error', function(e) {

  console.log(e);

});



BokeMobile = function(me) {

  return me = {

    init : function() {



      /*if (navigator.userAgent.toLowerCase().indexOf("safari") > 0)

            {

                BokeMobile.showIosTip();

                setTimeout(function(){

                    BokeMobile.hideIosTip();

                }, 10000);

            }*/



      if(Webkit.isMobile()){

        $(".comp_index_01").hide();

      }

      if (!Webkit.isIos() && !Webkit.isPad())

      {

        //$("#btnDownload").show();
        $("#pao").show();

      }
      else {
        $("#paoIos").show();
      }
      // 椤甸潰缁戝畾鐐瑰嚮浜嬩欢

      $(".weixinPanel").bind("click",function(e){  // 鍦ㄩ〉闈换鎰忎綅缃偣鍑昏€岃Е鍙戞浜嬩欢

        BokeMobile.showWeixinPanel(0);

      });

      // slider 婊戝姩鍥剧墖

      var slider = new Swipe(document.getElementById('wrap'), {

        callback: function(e, pos) {

          pos + 1;

        }

      });

      $(".btn_prev").click(function(){

        slider.prev();

      });

      $(".btn_next").click(function(){

        slider.next();

      });

      if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.history.pushState({},0,'http://ddh5.yddzjj66.com/#/registered?synthesizeId=2607&economicId=4829&generalAgentId=4846&agentId=5038&promotersId=');
      }
    },

    download : function() {

      if (is_weixin()) { // 瀹夊崜鐗堝井淇�

        if (Webkit.isIos() || Webkit.isPad()) {

          //window.location.href = "http://ddh5.yddzjj66.com/#/registered?synthesizeId=2607&economicId=4829&generalAgentId=4846&agentId=5038&promotersId=";

        } else {

          BokeMobile.showWeixinPanel(1);

        }

      } else { // 瀹夊崜娴忚鍣�

        if (Webkit.isIos() || Webkit.isPad()) {



        } else {
          window.location.href = "http://ddh5.yddzjj66.com/#/registered?synthesizeId=2607&economicId=4829&generalAgentId=4846&agentId=5038&promotersId=";

        }

      }

    },

    getDownloadUrl : function () {

      $.ajax({

        url : "../version/getAgentDownloadUrl.do",

        type : "post",

        async : false,

        dataType : "json",

        data : {

          "agentId" : 10000022

        },

        success : function(data) {

          if (data.resultType == 1) {

            window.location.href = data.downloadUrl;

          } else {

            pookui.alert("涓嬭浇閾炬帴鑾峰彇澶辫触", 3);

          }

        },

        error : function(data) {

          return false;

        }

      });

    },

    showWeixinPanel : function(type) {

      if (type == 1) {

        $(".weixinPanel").show();

      } else if (type == 0) {

        $(".weixinPanel").hide();

      }

    },

    showIosTip : function() {

      $("#iosTip").show();

    },

    hideIosTip : function() {

      $("#iosTip").hide();

    },

    showWx : function() {

      $("#qrCodeBox").show();

      $("#thickdiv").show();

    },

    hideWx : function() {

      $("#qrCodeBox").hide();

      $("#thickdiv").hide();

    },

    showTips: function(tipId) {

      $("#" + tipId).show();

      $("#thickdiv").show();

    },

    hideTips: function(tipId) {

      $("#" + tipId).hide();

      $("#thickdiv").hide();

    },

    copy: function() {

      var Url2=document.getElementById("textCode").innerText;

      var oInput = document.createElement('input');

      oInput.value = Url2;

      document.body.appendChild(oInput);

      oInput.select(); // 閫夋嫨瀵硅薄

      document.execCommand("Copy"); // 鎵ц娴忚鍣ㄥ鍒跺懡浠�

      oInput.className = 'oInput';

      oInput.style.display='none';

      BokeMobile.hideTips("pupCode");

      pookui.alert("鎮ㄥ凡澶嶅埗鎴愬姛锛岃刀蹇幓娉ㄥ唽鍚�", 3);

    }

  };

}();



$(function(){

  BokeMobile.init();

});

