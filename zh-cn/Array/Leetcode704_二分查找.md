# 000. Title (Easy)

**题目链接**: [LeetCode]([url](https://leetcode.com/problems/binary-search/description/))
**核心技巧**: **while循环二分搜索**

## 🧠 解题思路
1.  使用while循环，因为不知道要找多少次，只要范围还在就继续找
2.  防止整数溢出，只要涉及到找数组或者区间的中间值，都用int mid = left + (right - left)/2
3.  计算Mid: 一定要写在while循环里，这样每轮都会更新
4.  使用[left, right) ，在这个左闭右开的情况下，只有left < right 才有意义. 如果left == right, 循环必须停止，只有while(left < right)

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java

public class _704_BinarySearch {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

```