      var link = document.querySelector(".feedback");
			var popup = document.querySelector(".modal-content");
			var overlay = document.querySelector(".modal-overlay");
			var close = popup.querySelector(".content-close");
			var form = popup.querySelector("form");
			var login = popup.querySelector("[name=login]");
			var password = popup.querySelector("[name=mail]");
			var storage = localStorage.getItem("login");

			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("modal-content-show");
				overlay.classList.add("modal-overlay-show");

				if (storage) {
          		login.value = storage;
          		mail.focus();
        		} else {
         		login.focus();
        		}				
      		});

      	close.addEventListener("click", function(event) {
        	event.preventDefault();
        	popup.classList.remove("modal-content-show");
        	popup.classList.remove("modal-error");
        	overlay.classList.remove("modal-overlay-show");
      		});

      	form.addEventListener("submit", function(event) {
        	if (!login.value || !mail.value) {
          	event.preventDefault();
          	popup.classList.remove("modal-error");
          	popup.offsetWidth = popup.offsetWidth;
          	popup.classList.add("modal-error");
         	console.log("Нужно ввести имя и почту"); 
        	}	else {
          	localStorage.setItem("login", login.value);
        	}
      		});

      	window.addEventListener("keydown", function(event) {
        	if (event.keyCode === 27) {
          	if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-overlay-show");
          	}
        	}
      		});