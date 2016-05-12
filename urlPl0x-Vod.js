// Made by Parog of OwnedCore.com 
// This script is for educational purposes only.

var videoUrl = $("#player_code").html().match(/file: "(\S+)"/)[1];
var a = $("<a>").attr("href", videoUrl).attr("download", videoUrl).appendTo("body"); 

a[0].click(); 
a.remove(); 
