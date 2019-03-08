function show_tab(tab_name) {
	all_tabs = ['study_1_description', 'study_2_description']
	all_tabs.forEach(function(el_name) {
		content = document.getElementById(el_name);
		if (el_name == tab_name) {
			content.style.display = "block";
		} else {
			content.style.display = "none";
		}
	})
}


s1_button = document.getElementById('study1_box')
s2_button = document.getElementById('study2_box')


s1_button.onclick = function() {show_tab('study_1_description')};
s2_button.onclick = function () {show_tab('study_2_description')};