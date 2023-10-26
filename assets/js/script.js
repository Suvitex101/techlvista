function toggleFaq(element) {
	var faqContent = element.parentNode.querySelector('.faq_p');

	if (faqContent.style.display === 'block') {
		faqContent.style.display = 'none';
	} else {
		faqContent.style.display = 'block';
	}
}

var progressBars = document.querySelectorAll('.progress-bar');
var progress = 50;

progressBars.forEach(function(progressBar) {
   progressBar.style.width = progress + '%';
   progressBar.innerHTML = progress + '%';
});

var completedBars = document.querySelectorAll('.completed-bar');
var completed = 100;

completedBars.forEach(function(completedBars) {
   completedBars.style.width = completed + '%';
   completedBars.innerHTML = completed + '%';
});


document.getElementById('image-upload').addEventListener('change', function () {
	const image = this.files[0];
	if (image) {
		const reader = new FileReader();

		reader.onload = function (e) {
			document.getElementById('profile-image').src = e.target.result;
		};

		reader.readAsDataURL(image);
	}
});

