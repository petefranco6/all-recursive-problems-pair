const printAndPause = (nums) => {
    if(!nums.length) {
        return;
    }
    let first = nums.shift()
    console.log(first)

    return setTimeout(() => {
        printAndPause(nums)
    }, first)
}


printAndPause([200,800,200,800,200,800])
