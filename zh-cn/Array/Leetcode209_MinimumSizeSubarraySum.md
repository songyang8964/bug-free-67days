**题目链接**: [LeetCode]([url](https://leetcode.com/problems/minimum-size-subarray-sum/))
**核心技巧**: **滑动窗口**

## 🧠 解题思路
1.  双指针根据移动方式，可以分为主从模式(主指针作为循环变量，向右扩展)和对撞模式，在主从模式（滑动窗口和快慢指针）中，右指针负责遍历到底
2.  滑动窗口代码模板
3.  解决最值问题，用擂台法


```
   // right 是主驱动，控制循环次数
for (int right = 0; right < nums.length; right++) {
    // 1. 进数据
    
    // 2. 判断是否需要收缩 left (left 是被动的)
    while (条件不满足) {
        left++; 
    }
}

```


## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java

public class _209_MinimumSizeSubarraySum {
    int minLength = Integer.MAX_VALUE;
    int left = 0;
    int sum = 0;

    public int minSubArrayLen(int target, int[] nums) {
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            // 注意这里必须是while, 因为可能去掉一个左边的数后, sum依然大于target
            while (sum >= target) {
                // 计算当前数组区间的长度
                int currentLength = right - left + 1;
                // 如果比之前记录的更小, 就更新minLength
                minLength = Math.min(minLength, currentLength);
                // 缩小窗口
                sum = sum - nums[left];
                left++;
            }
        }
        // 处理特殊情况：如果 minLength 还是初始值，说明整个数组加起来都不够 target
        if (minLength == Integer.MAX_VALUE) {
            return 0;
        } else {
            return minLength;
        }
    }
}

```