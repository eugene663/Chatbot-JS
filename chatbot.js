function check_text(){
    var value = document.getElementById("console").value;
    var message = document.getElementsByClassName("cat_says")[0];
    console.log(value);

    if(value == "alert"){
		alert("경고창이 떴습니다.");
	}
	else{
		console.log(value);
	}

    if(value == "안녕"){
        message.innerHTML = "안녕하세요~";
    }
    else if(value == "뭐해?"){
        message.innerHTML = "채팅을 기다리고 있었어요!";        
    }
}

