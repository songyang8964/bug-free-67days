**题目链接**: [LeetCode]([url](https://leetcode.com/problems/reverse-linked-list/description/))
**核心技巧**: **Tag**

## 🧠 解题思路
1.  引用更新顺序（顺序不能乱）
这四步顺序严格固定：
temp = curr.next; (记)
curr.next = prev; (改)
prev = curr; (移 prev)
curr = temp; (移 curr)
如果不按这个顺序，一定会丢失数据或逻辑错误。
1.  自己写的时候犯了个错误，把temp = curr.next这一步放在了循环体外面，导致temp的值永远为二，死循环了

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java


class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode cur = head;
        
        while(cur!=null){
            ListNode temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;

        }
        return prev;
        
    }
}

```