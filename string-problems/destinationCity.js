
/**
 * 
 * @param {Array} paths 
 */
const destinationCity = (paths) => {
    // Create a set of all starting cities
    let startingCities = new Set();
    // Iterate through the paths to add all starting cities (cityAi)
    for(let [cityA,cityB] of paths) {
        startingCities.add(cityA);
    }
    // Now check the destination cities (cityBi) and return the one not in startingCities
    for(let [cityA,cityB] of paths) {
        if(!startingCities.has(cityB)) {
            return cityB;
        }
    }
}

console.log(destinationCity(paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));