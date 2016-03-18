// Made by Parog of OwnedCore.com 
// This script is for educational purposes only.

var videoUrl = $("#player_code > script:nth-child(3)").html().match(/file: "(\S+)"/)[1]

$("#file_title").append('<a href="' + videoUrl + '">***Download***</a>')