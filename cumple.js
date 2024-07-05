document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('rsvpForm').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');

});

