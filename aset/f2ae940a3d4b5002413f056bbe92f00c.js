(function($){'use strict';function wdpDoCopy(el){var $el=$(el);var message=$el.data('message');var origHtml=$el.html();var content=$el.data('clipboard-text')||$el.siblings('div.copy-content').text();function showFeedback(){$el.html(message);var counter=0;var interval=setInterval(function(){counter++;if(counter===1){$el.html(origHtml);clearInterval(interval)}},1500)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(content).then(function(){showFeedback()}).catch(function(){wdpLegacyCopy(content,showFeedback)})}else{wdpLegacyCopy(content,showFeedback)}}
function wdpLegacyCopy(text,callback){var $temp=$('<textarea>');$('body').append($temp);$temp.val(text).select();try{document.execCommand('copy')}catch(e){}
$temp.remove();if(typeof callback==='function'){callback()}}
$(document).on('click','.wdp-copy-btn',function(e){e.preventDefault();wdpDoCopy(this)})})(jQuery)
;