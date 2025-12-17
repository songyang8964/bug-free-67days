# 27. 移除元素 (Easy)

**题目链接**: [LeetCode 27](https://leetcode.cn/problems/remove-element/)
**核心技巧**: **双指针**

## 🧠 解题思路
1. 这道题需要用来双指针（快慢指针）的思想, 快指针负责在前面探路，看到第一个不等于val的元素就直接覆盖到第一个等于val的元素。
2. slow指针用来标记当前val值的位置。
3. 题目要求返回新数组的长度，也就是 slow 指针最后停留的位置。
4. 数组中元素只能被覆盖，不能被删除。

## ⏳ 复杂度分析
- **时间复杂度**: O(N) - 快指针遍历了一遍数组
- **空间复杂度**: O(1) - 原地修改

## 💻 代码 (Java)

```java
public class _27_RemoveElement {

    int slow = 0;

    public int removeElement(int[] nums, int val) {
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        // slow为移除元素后数组的长度
        return slow;
    }
}