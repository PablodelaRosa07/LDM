var radios = document.querySelectorAll('input[name="elige"]');
var inputInfo = document.getElementById('mas_info');
var spanAviso = document.getElementById('aviso');

radios.forEach(radio => {radio.addEventListener('change', function() {
        if (this.value === "Si") {
            inputInfo.style.display = "block";
            spanAviso.style.display = "none";
        } 
        
        if (this.value === "No") {
            inputInfo.style.display = "none";
            spanAviso.style.display = "inline";
        }
    });
});

