var selectedStartDate, selectedEndDate;

function isDateSelected() { // Checks if a date has been selected
	return selectedStartDate && selectedEndDate;
}

function makeEvent(title, start, end) { // Creates an event on the calendar
	$('#calendar').fullCalendar('renderEvent', {
		title: title,
		start: start,
		end: end
	});
}

$(function () {
	$('#calendar').fullCalendar({
		defaultView: 'agendaWeek', // Agenda view as default
		selectable: true,
		allDaySlot: false, // Removes the all-day events slot
		nowIndicator: true, // Shows current date/time indicator
		firstDay: 1, // Starts from Mon

		minTime: '06:00:00', //* Shows day from 6:00
		maxTime: '22:00:00', //  to 22:00 *//

		header: { // Header settings
			left: 'today prev,next',
			center: 'title',
			right: 'addEventButton agendaWeek,agendaDay'
		},

		customButtons: {
			/**
			 * Adds an event on the calendar on the selecter area,
			 * if none are given it will ask for the date.
			 */
			addEventButton: {
				text: '+',

				click: function () {
					if (isDateSelected) { // If a date has been selected
						makeEvent('Ore lavorate', selectedStartDate, selectedEndDate); // Creates an event on the calendar
					}
					else {  // If a date has NOT been selected
						var startDate = prompt("Inserisci la data di inizio (anno facoltativo) nel formato 'AA-MM-GG hh:mm'"); // Asks for the date

						if (startDate) { // If the user insert a date
							var rawDate = moment(startDate);
							var smartDate = moment(moment().get(year) + startDate);
							
							if (rawDate.isValid()) {
								var endDate = prompt("Inserisci la data di fine (anno facoltativo) nel formato 'AA-MM-GG hh:mm'"); // Asks for the date

								
							}
							else if (smartDate.isValid()) {
								
							}
							else {
								alert("Data non valida");
							}
						}


					}



					var dateStr = prompt('Inserisci una data nel formato MM-DD hh:mm');
					var date = moment('2018' + dateStr);
					
					if (!date.isValid()) {
						var title = prompt('Enter a title');

						$('#calendar').fullCalendar('renderEvent', {
							title: title,
							start: selectedStartDate,
							end: selectedEndDate
						});
					} else {
						alert('Invalid date.');
					}
				}
			}
		},

		// Select and unselect event handlers
		select: function (startDate, endDate) {
			selectedStartDate = startDate.format();
			selectedEndDate = endDate.format();
		},
		unselect: function (jsEvent, view) {
			setTimeout(() => {
				selectedStartDate = undefined;
				selectedEndDate = undefined;
			}, 100);
		}
	});
});