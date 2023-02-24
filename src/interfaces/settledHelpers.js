const onlySettled = promises => Promise.allSettled(promises)
    .then((results) => {
        return results.filter(p => p.status === "fulfilled")
            .map(p => p.value)
    })

const timeSortSettled = function (responseDatas) {
    const flatResponseDatas = responseDatas.flat();
    const timeSortedData = flatResponseDatas
        .sort((a, b) => {
            const [timeA, timeB] = [new Date(a.time), new Date(b.time)]
            return timeB > timeA ? 1 : -1
        })
    return timeSortedData;
}

export {onlySettled,timeSortSettled};