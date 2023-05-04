// Find recursive relation
// rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )

//Recursive (top-down) + memo
var rob = function (nums) {
  return robRecursive(nums, nums.length - 1, []);
};

function robRecursive(nums, i, memo) {
  if (i < 0) {
    return 0;
  }

  if (memo[i] >= 0) {
    return memo[i];
  }

  let rob_current_house = robRecursive(nums, i - 2, memo) + nums[i];
  let skip_current_house = robRecursive(nums, i - 1, memo);
  let result = Math.max(skip_current_house, rob_current_house);
  memo[i] = result;

  return result;
}


// interative bottom-up + memo
var rob = function(nums) {
  if (nums.length === 0) return 0;
  const memo = []
  memo[0] = 0;
  memo[1] = nums[0];
 
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    memo[i+1] = Math.max(memo[i], memo[i-1] + val);
  }

  return memo[nums.length];
};


//interative (bottom-up) N varibles
var rob = function(nums) {
  if (nums.length === 0) {
      return 0;
    }
  
    let prev1 = 0; 1,2,4,4
    let prev2 = 0; 0,1,2,4
  
    for (const value of nums) {
      let tmp = prev1; 
      prev1 = Math.max(prev2 + value, prev1); 
      prev2 = tmp; 
    }
  
    return prev1;
  };
  