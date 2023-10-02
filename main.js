function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const result = document.getElementById("result");
    
    if (celsiusInput.value === "") {
        result.textContent = "Hey, Please Enter some value.";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    result.textContent = `${celsius.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}

const celsiusInput = document.getElementById("celsiusInput");
celsiusInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        convertToFahrenheit();
    }
});