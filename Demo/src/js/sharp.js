// JavaScript Document
//
//
!function () {
  var cw = document.documentElement.clientWidth || document.body.clientWidth;
  cw = cw > 750 ? 750 : cw;
  var zoom = cw / 375;
  document.write('<style id="htmlzoom">html{font-size:' + (zoom * 50) + 'px;}</style>');
  window.addEventListener('resize', function () {
    cw = document.documentElement.clientWidth || document.body.clientWidth;
    if (cw > 750)cw = 750;
    zoom = cw / 375;
    document.getElementById('htmlzoom').innerHTML = 'html{font-size:' + (zoom * 50) + 'px;}';
  });
}();



jQuery(document).ready(function($) {







});



function acc()
{
  document.getElementById("thickdiv").style.display = '';
  document.getElementById("pupCode").style.display = '';

}

function aqq()
{
  document.getElementById("thickdiv").style.display = '';
  document.getElementById("pupCode").style.display = '';

}

function accclose()
{
  document.getElementById("thickdiv").style.display = 'none';
  document.getElementById("pupCode").style.display = 'none';

}

function copyUrl2()
{
  var Url2=document.getElementById("biao1").innerText;
  var oInput = document.createElement('input');
  oInput.value = Url2;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  oInput.className = 'oInput';
  oInput.style.display='none';
  alert('复制成功');
}


