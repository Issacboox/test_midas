function minEnergy(start, shops, stations, target) {
    const dp = new Array(shops.length).fill(Infinity);
    dp[0] = Math.abs(start - shops[0]);
    const pathList = [
        {
            path: "Walk",
            energy: dp[0]
        }
    ];
    for(let i = 1; i < shops.length; i++){
        for (const station of stations){
            const distanceToStation = Math.abs(shops[i] - station);
            const distanceFromStationToShop = Math.abs(station - shops[i - 1]);
            const energyUsedByBus = distanceToStation + distanceFromStationToShop;
            dp[i] = Math.min(dp[i], dp[i - 1] + energyUsedByBus);
            pathList.push({
                path: `Bus to station ${station}`,
                energy: dp[i]
            });
        }
        const distanceToShop = Math.abs(shops[i] - shops[i - 1]);
        dp[i] = Math.min(dp[i], dp[i - 1] + distanceToShop);
        pathList.push({
            path: "Walk",
            energy: dp[i]
        });
    }
    const distanceToTarget = Math.abs(shops[shops.length - 1] - target);
    let totalEnergy = dp[shops.length - 1] + distanceToTarget;
    pathList.push({
        path: `Walk to target ${target}`,
        energy: totalEnergy
    });
    for(let i = shops.length - 1; i > 0; i--){
        const distanceFromShopToStation = Math.abs(shops[i] - stations[0]);
        const energyUsedToReturnToStation = distanceFromShopToStation;
        totalEnergy = Math.min(totalEnergy, dp[i - 1] + energyUsedToReturnToStation);
        pathList.push({
            path: `Return to station ${stations[0]} from shop ${shops[i]}`,
            energy: totalEnergy
        });
    }
    return pathList;
}
const pathList = minEnergy(0, [
    4,
    9
], [
    3,
    6,
    8
], 11);
pathList.forEach((pathInfo, index)=>{
    console.log(`Step ${index + 1}: ${pathInfo.path}, Energy: ${pathInfo.energy}`);
});

//# sourceMappingURL=index.734eca29.js.map
