// Generate unique url with all parameters

location.hash = location.hash || btoa(JSON.stringify({
    seed: Math.random() * Math.floor(9999999999999), 
    parameters: {
        temperature: Math.random() * 4000,
        size: Math.random() 
    }
}));