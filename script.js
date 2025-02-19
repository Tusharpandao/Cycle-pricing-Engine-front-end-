document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cycleForm');
    const priceDisplay = document.getElementById('priceDisplay');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const brand = form.brand.value;
        const frame = form.frame.value;
        const handlebar = form.handlebar.value;
        const seating = form.seating.value;
        const wheel = form.wheel.value;
        const tyre = form.tyre.value;
        const chainAssembly = form.chainAssembly.value;
        const comments = form.comments.value;
        const breaks = form.breaks.value;
        // Define component prices
        // const brandPrices = {
        //     'Avon': 300,
        //     'Giant': 500,
        //     'Hero': 400,
        //     'Atlas': 350,
        //     'Schwinn': 450
        // };

        const framePrices = {
            'Steel': 200,
            'Aluminum': 300,
            'Carbon': 800
        };

        const handlebarPrices = {
            'Flat': 100,
            'Riser': 120,
            'Cruiser': 150
        };

        const seatingPrices = {
            'Upright': 100,
            'Aero': 150,
            'Climbing': 200
        };

        const wheelPrices = {
            'Spokes': 150,
            'Rim': 200
        };
        const breaksPrices = {
            'Disc': 350,
            'V-Brake': 250,
            'Cantilever': 400
        };

        const tyrePrices = {
            'Tube': 100,
            'TubeLess': 200
        };

        const gearPrices = {
            '4': 150,
            '6': 250,
            '8': 350
        };

        // Calculate individual component prices
        const prices = {
            // brand: brandPrices[brand] || 0,
            frame: framePrices[frame] || 0,
            handlebar: handlebarPrices[handlebar] || 0,
            seating: seatingPrices[seating] || 0,
            wheel: wheelPrices[wheel] || 0,
            breaks: breaksPrices[breaks] || 0,
            tyre: tyrePrices[tyre] || 0,
            chainAssembly: gearPrices[chainAssembly] || 0
        };

        // Calculate total price
        const totalPartsPrice = Object.values(prices).reduce((sum, price) => sum + price, 0);
        const gstAmount = totalPartsPrice * 0.18;
        const finalPrice = totalPartsPrice + gstAmount;

        // Create price breakdown HTML
        const priceBreakdown = `
            <h3>${brand} Cycle Price Breakdown</h3>
            <div class="price-table-container">
                <table class="price-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Selection</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>Frame</td>
                            <td>${frame}</td>
                            <td>${prices.frame}</td>
                        </tr>
                        <tr>
                            <td>Handlebar</td>
                            <td>${handlebar}</td>
                            <td>${prices.handlebar}</td>
                        </tr>
                        <tr>
                            <td>Seating</td>
                            <td>${seating}</td>
                            <td>${prices.seating}</td>
                        </tr>
                        <tr>
                            <td>Wheel</td>
                            <td>${wheel}</td>
                            <td>${prices.wheel}</td>
                        </tr>
                         <tr>
                            <td>Breaks</td>
                            <td>${breaks}</td>
                            <td>${prices.breaks}</td>
                        </tr>
                        <tr>
                            <td>Tyre</td>
                            <td>${tyre}</td>
                            <td>${prices.tyre}</td>
                        </tr>
                        <tr>
                            <td>Chain Assembly</td>
                            <td>${chainAssembly} Gears</td>
                            <td>${prices.chainAssembly}</td>
                        </tr>
                        
                        <tr class="total-row">
                            <td colspan="2">Parts Total Price</td>
                            <td>₹${totalPartsPrice}</td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="2"> 18% GST</td>
                            <td>₹${gstAmount}</td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="2">Total Price</td>
                            <td>₹${finalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        // Update price display
        priceDisplay.innerHTML = priceBreakdown;
        priceDisplay.classList.add('visible');

        
        priceDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Reset price display when form is reset
    form.addEventListener('reset', function() {
        priceDisplay.classList.remove('visible');
    });

    // Add input validation and styling
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) {
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
            }
        });
    });

    // Select the navigation links
    const homeLink = document.querySelector('.nav-links a:nth-child(1)');
    const calculatePriceLink = document.querySelector('.nav-links a:nth-child(2)');
    const formContainer = document.querySelector('.form-container');

    // Scroll to the top when "Home" is clicked
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Scroll to the form container when "Calculate Price" is clicked
    calculatePriceLink.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.scrollIntoView({ behavior: "smooth" });
    });
});

