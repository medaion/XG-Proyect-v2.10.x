function contar(b,a){n=document.forms[b][a].value.length;t=5000;if(n>t){document.forms[b][a].value=document.forms[b][a].value.substring(0,t)}else{document.forms[b]["result"].value=t-n}}var x="";var e=null;function cntchar(a){if(window.document.forms[0].text.value.length>a){window.document.forms[0].text.value=x}else{x=window.document.forms[0].text.value}if(e==null){e=document.getElementById("cntChars")}else{e.childNodes[0].data=window.document.forms[0].text.value.length}};