**题目链接**: [LeetCode]([url](https://leetcode.com/problems/swap-nodes-in-pairs/))
**核心技巧**: **Tag**

## 🧠 解题思路
1. dummy 是为了记住链表的头在哪里，它通常不动，这样最后才能通过 return dummy.next 找到完整的链表。
temp 是一个移动的光标，它每一轮循环都会往后移动，去修复链表中间的断开处。

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java
public class _24_SwapPairs {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        // define temp pointer, point to dummy
        ListNode temp = dummy;
        // temp后面至少需要有两个节点才能进行交换
        while (temp.next != null && temp.next.next != null) {
            ListNode node1 = temp.next;
            ListNode node2 = temp.next.next;
            // swap
            dummy.next = node2;
            node1.next = node2.next;
            node2.next = node1;
            temp = node1;
        }
        return dummy.next;

    }
}

```