$(document).ready(function() {

    $('.start_time').pickatime({
        format: 'h:i A'
    })

    $('.end_time').pickatime({
        format: 'h:i A'
    })

    var u_from_$input = $('.u_start_date').pickadate({
            format: 'yyyy-mm-d',
            selectYears: false,
            selectMonths: false
        }),
        u_from_picker = u_from_$input.pickadate('picker')

    var u_to_$input = $('.u_end_date').pickadate({
            format: 'yyyy-mm-d',
            selectYears: false,
            selectMonths: false
        }),
        u_to_picker = u_to_$input.pickadate('picker')

    // Check if there’s a “from” or “to” date to start with.
    if (u_from_picker.get('value')) {
        u_to_picker.set('min', u_from_picker.get('select'))
    }
    if (u_to_picker.get('value')) {
        u_from_picker.set('max', u_to_picker.get('select'))
    }

    // When something is selected, update the “from” and “to” limits.
    u_from_picker.on('set', function(event) {
        if (event.select) {
            u_to_picker.set('min', u_from_picker.get('select'))
        } else if ('clear' in event) {
            u_to_picker.set('min', false)
        }
    })
    u_to_picker.on('set', function(event) {
        if (event.select) {
            u_from_picker.set('max', u_to_picker.get('select'))
        } else if ('clear' in event) {
            u_from_picker.set('max', false)
        }
    })


    var p_from_$input = $('.p_start_date').pickadate({
            format: 'yyyy-mm-d',
            selectYears: false,
            selectMonths: false
        }),
        p_from_picker = p_from_$input.pickadate('picker')

    var p_to_$input = $('.p_end_date').pickadate({
            format: 'yyyy-mm-d',
            selectYears: false,
            selectMonths: false
        }),
        p_to_picker = p_to_$input.pickadate('picker')

    // Check if there’s a “from” or “to” date to start with.
    if (p_from_picker.get('value')) {
        p_to_picker.set('min', p_from_picker.get('select'))
    }
    if (p_to_picker.get('value')) {
        p_from_picker.set('max', p_to_picker.get('select'))
    }

    // When something is selected, update the “from” and “to” limits.
    p_from_picker.on('set', function(event) {
        if (event.select) {
            p_to_picker.set('min', p_from_picker.get('select'))
        } else if ('clear' in event) {
            p_to_picker.set('min', false)
        }
    })
    p_to_picker.on('set', function(event) {
        if (event.select) {
            p_from_picker.set('max', p_to_picker.get('select'))
        } else if ('clear' in event) {
            p_from_picker.set('max', false)
        }
    })
});