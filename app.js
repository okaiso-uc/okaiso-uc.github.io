<script>
    function updateThreatMeter(threatLevel) {
    
        var threatMeter = document.getElementById('threat-meter');

    
        switch (threatLevel) {
            case 'low':
                threatMeter.style.width = '25%';
                threatMeter.innerText = 'Low';
                threatMeter.classList.remove('bg-warning', 'bg-danger');
                threatMeter.classList.add('bg-success');
                break;
            case 'medium':
                threatMeter.style.width = '50%';
                threatMeter.innerText = 'Medium';
                threatMeter.classList.remove('bg-success', 'bg-danger');
                threatMeter.classList.add('bg-warning');
                break;
            case 'high':
                threatMeter.style.width = '100%';
                threatMeter.innerText = 'High';
                threatMeter.classList.remove('bg-success', 'bg-warning');
                threatMeter.classList.add('bg-danger');
                break;
            default:
        
                threatMeter.style.width = '25%';
                threatMeter.innerText = 'Low';
                threatMeter.classList.remove('bg-warning', 'bg-danger');
                threatMeter.classList.add('bg-success');
        }
    }

    updateThreatMeter('high');
</script>
