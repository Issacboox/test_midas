function getClockAngle(hh_mm) {
    const [hours, minutes] = hh_mm.split(":").map(Number);
    if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) throw new Error("Invalid time format. Hours should be between 0 and 23, and minutes should be between 0 and 59.");
    const hourAngle = hours % 12 * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
    const minuteAngle = minutes * 6; // 6 degrees per minute
    const angleDiff = Math.abs(hourAngle - minuteAngle);
    return Math.min(angleDiff, 360 - angleDiff);
} // console.log(getClockAngle('03:40')); 

//# sourceMappingURL=index.377278e2.js.map
