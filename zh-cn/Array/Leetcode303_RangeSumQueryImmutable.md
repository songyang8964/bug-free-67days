**题目链接**: [LeetCode]([url](https://leetcode.com/problems/range-sum-query-immutable/))
**核心技巧**: **前缀和**

## 🧠 解题思路
1.  用前缀和技巧
2.  PreSum为了处理边界条件，比起原数组，要向右偏移一位。 PreSum[0] 固定为0
3.  处理输入数组的步骤在构造器里完成，构造器在new一个对象的时候对该对象进行初始化操作. 构造器的作用是将 “外部传入的原始数据” 转化为 “内部可用的处理后数据”。这一步必须在任何查询开始之前完成，且只做一次
4.  做的时候可以画出两个简单的数组比较，这样数组的索引不会出错
5.  preSum[k] 的值，代表 nums 中“前 k 个数”的总和

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java
class NumArray {
    private int[] preSum;

    public NumArray(int[] nums) {
        preSum = new int[nums.length + 1];
        preSum[0] = 0;
        for (int i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + nums[i - 1];
        }

    }

    public int sumRange(int left, int right) {
        return preSum[right + 1] - preSum[left];
    }
}

```