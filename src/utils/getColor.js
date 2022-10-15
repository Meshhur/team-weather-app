export const getColor = (temperature) => {
    if (temperature <= 10) return "blue";
    if (temperature > 10 && temperature < 40) return "green";
    if (temperature >= 40) return "red";
};