// Mixed message object

const mixedMessage = {
    zodiac: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricornus", "Aquarius", "Pisces"],
    district: ["Kreutzberg", "Friedrichshain", "Mitte", "Prenzlauer Berg"],
    forecast: ["perfect", "good", "bad", "terrible"],
    returnMixedMessage () {
        let randomZodiac = Math.floor(Math.random() * (this.zodiac.length));
        let randomDistrict = Math.floor(Math.random() * (this.district.length));
        let randomForecast = Math.floor(Math.random() * (this.forecast.length));
        console.log(`Every ${this.zodiac[randomZodiac]} in ${this.district[randomDistrict]} will have a ${this.forecast[randomForecast]} day tomorrow!`);
    }
}

for (i = 0; i < 5; i++) {
    mixedMessage.returnMixedMessage()
}