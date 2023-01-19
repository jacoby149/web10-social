const onlySettled = promises => Promise.allSettled(promises)
    .then((results) => {
        return results.filter(p => p.status === "fulfilled")
        .map(p => p.value)
    })

export default onlySettled;