var searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target)
    else {
        let res = 0
        nums.forEach( (num, num_index) => {
            if ( 
                target >= num
                &&
                (   num_index !== nums.length-1
                    ?
                    target <= nums[num_index+1]
                    :
                    true
                )
                
            ) res = num_index + 1
        })
        return res
    }
};
