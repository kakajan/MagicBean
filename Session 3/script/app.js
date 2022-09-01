    function operate(mode) {
        const myInput = document.getElementById('a');
        let counter = myInput.value;
        if (mode == 'minus') {
            if (counter > 0) { 
                counter--;
            }
        } else {
            counter++;
        }
        myInput.value = counter;
    }
    document.getElementById('minus').addEventListener(
        'click',
        function () {
            operate('minus')
        }
    )

    document.getElementById('plus').addEventListener(
        'click',
        function () {
            operate('plus')
        }
    )