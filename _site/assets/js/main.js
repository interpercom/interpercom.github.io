function expandFooter () {
  document.getElementById("footer").classList.toggle('active')
}

function closeFooter () {
  document.getElementById("footer").classList.remove('active')
}

function toggleSidebar () {
  document.getElementById("sidebar").classList.toggle('active')
}

function toggleDropdown () {
  document.getElementById("dropdownUser").classList.toggle('active')
}

function toggleTableTab (event) {
	if (event.currentTarget.classList[1] != "active") {
		let activeTab = document.getElementsByClassName("tab active")[0]
		let inactiveTab = document.getElementsByClassName("tab inactive")[0]
		let activeTable = document.getElementsByClassName("table active")[0]
		let inactiveTable = document.getElementsByClassName("table inactive")[0]

		activeTab.classList.add('inactive')
		activeTab.classList.remove('active')
		inactiveTab.classList.add('active')
		inactiveTab.classList.remove('inactive')

		activeTable.classList.add('inactive')
		activeTable.classList.remove('active')
		inactiveTable.classList.add('active')
		inactiveTable.classList.remove('inactive')
	}
}
