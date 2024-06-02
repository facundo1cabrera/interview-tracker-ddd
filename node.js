/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let swipes = 0;

    let curr = nums[0];
    let pos = 0;
    if (nums.length % 2 === 0) {
        
        for(let i = 0; i < nums.length; i + 2) {
            const newPosition = getPositionGivenRange(pos, k, nums.length);
            const aux = nums[newPosition];
            nums[newPosition] = curr;
            pos = newPosition
            curr = aux;
        }
        
        curr = nums[1]
        pos = 1;
        for(let i = 1; i < nums.length; i + 2) {
            const newPosition = getPositionGivenRange(pos, k, nums.length);
            const aux = nums[newPosition];
            nums[newPosition] = curr;
            pos = newPosition
            curr = aux;
        }
    } else {
            
        while (swipes < nums.length) {
            const newPosition = getPositionGivenRange(pos, k, nums.length);
            const aux = nums[newPosition];
            nums[newPosition] = curr;

            curr = aux;
            pos = newPosition;
            swipes++;
        }
    }

    return nums
};

function getPositionGivenRange(pos, steps, length) {
    if (pos + steps > length - 1) {
        return (pos + steps) - length;
    } else {
        return pos + steps;
    }
}

console.log(rotate([-1,-100,3,99], 2 ))