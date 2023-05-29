const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Initiate download of the diploma
 */
function downloadDiploma(serverObject) {
	var dwnloadBtn = document.getElementById('downloadBtn');
	dwnloadBtn.setAttribute('disabled', true);
	dwnloadBtn.innerHTML = 'Downloading...';
	
	const link = document.createElement('a');
	const fileName = serverObject.title.toLowerCase().replace(/ /g, '_');
	link.href = `${window.location.href}/certificate_of_completion_${encodeURIComponent(fileName)}.pdf`;	
	link.download = `certificate_of_completion_${fileName}.pdf`;
	link.dispatchEvent(new MouseEvent('click'));
	link.remove();

	dwnloadBtn.removeAttribute('disabled');
	dwnloadBtn.innerHTML = 'Download certificate';
}

/**
 * Set the initial values to display the diploma
 */
function initiatePageView(serverObject) {
	Array.from(document.getElementsByClassName('body-item')).forEach(item => {
		item.classList.remove('d-none');
	});
	document.getElementById('loadSpinner').classList.add('d-none');
	document.getElementById('examTitle').innerHTML = serverObject.title;
	document.getElementById('completionDate').innerHTML = `${
		MONTH[serverObject.date.getMonth()]
	} ${serverObject.date.getDate()}, ${serverObject.date.getFullYear()}`;
	document.getElementById('downloadBtn').removeAttribute('disabled');

	var lrnMoreTxt = document.getElementById('learnMoreTxt');
	lrnMoreTxt.setAttribute('href', serverObject.catalogUrl);
	lrnMoreTxt.classList.remove('disabled');

	const fileName = serverObject.title.toLowerCase().replace(/ /g, '_');
	document.getElementById('diplomaImg').setAttribute('src', `${window.location.href}/certificate_of_completion_${encodeURIComponent(fileName)}.jpg`);
	document.getElementById('diplomaImgMobile').setAttribute('src', `${window.location.href}/certificate_of_completion_${encodeURIComponent(fileName)}.jpg`);

	document.getElementById('svgCheckMark').style.fill = '#059862';
}

/**
 * Display error
 */
function displayError()
 {
	
	document.getElementById("bd").innerhtml;
	}

